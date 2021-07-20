import { MutableRefObject, useEffect,useCallback } from 'react';
import {
    Context,
    UserComponentFactory,
    ICellRendererComp,
} from 'ag-grid-community';
import { ShowDetails } from './cellComp';

export const showJsCellRenderer = (
    showDetails: ShowDetails | undefined,
    showTools: boolean,
    toolsValueSpan: HTMLElement | undefined,
    context: Context,
    jsCellRendererRef: MutableRefObject<ICellRendererComp|undefined>,
    eGui: MutableRefObject<any>) => {
        const destroyCellRenderer = useCallback( ()=> {
            const comp = jsCellRendererRef.current;
            if (!comp) { return; }

            const compGui = comp.getGui();

            if (compGui && compGui.parentElement) {
                compGui.parentElement.removeChild(compGui);
            }

            context.destroyBean(comp);
            jsCellRendererRef.current = undefined;
        }, [context, jsCellRendererRef]);

        // create or refresh JS cell renderer
        useEffect(() => {
            const showValue = showDetails != null;
            const jsCompDetails = showDetails && showDetails.compDetails && !showDetails.compDetails.componentFromFramework;
            const waitingForToolsSetup = showTools && toolsValueSpan == null;
            const showComp = showValue && jsCompDetails && !waitingForToolsSetup;

            // if not showing comp, destroy any existing one and return
            if (!showComp) {
                destroyCellRenderer();
                return;
            }

            const compDetails = showDetails!.compDetails;

            if (jsCellRendererRef.current) {
                // attempt refresh if refresh method exists
                const comp = jsCellRendererRef.current;
                const attemptRefresh = comp.refresh != null && showDetails!.force == false;
                const refreshResult = attemptRefresh ? comp.refresh(compDetails!.params) : false;
                const refreshWorked = refreshResult === true || refreshResult === undefined;

                // if refresh worked, nothing else to do
                if (refreshWorked) { return; }

                // if refresh didn't work, we destroy it and continue, so new cell renderer created below
                destroyCellRenderer();
            }

            const compFactory = context.getBean('userComponentFactory') as UserComponentFactory;
            const promise = compFactory.createCellRenderer(compDetails!);
            if (!promise) { return; }

            const comp = promise.resolveNow(null, x => x); // js comps are never async
            if (!comp) { return; }

            const compGui = comp.getGui();
            const parent = showTools ? toolsValueSpan! : eGui.current!;
            parent.appendChild(compGui);

            jsCellRendererRef.current = comp;

        }, [context, destroyCellRenderer, eGui, jsCellRendererRef, showDetails, showTools, toolsValueSpan]);

        // this effect makes sure destroyCellRenderer gets called when the
        // component is destroyed. as the other effect only updates when there
        // is a change in state
        useEffect(() => {
            return destroyCellRenderer;
        }, [destroyCellRenderer]);
}