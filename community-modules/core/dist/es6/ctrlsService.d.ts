// Type definitions for @ag-grid-community/core v26.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridCtrl } from "./gridComp/gridCtrl";
import { GridBodyCtrl } from "./gridBodyComp/gridBodyCtrl";
import { RowContainerCtrl } from "./gridBodyComp/rowContainer/rowContainerCtrl";
import { FakeHScrollCtrl } from "./gridBodyComp/fakeHScrollCtrl";
import { BeanStub } from "./context/beanStub";
import { GridHeaderCtrl } from "./headerRendering/gridHeaderCtrl";
import { HeaderRowContainerCtrl } from "./headerRendering/rowContainer/headerRowContainerCtrl";
interface ReadyParams {
    gridCtrl: GridCtrl;
    gridBodyCtrl: GridBodyCtrl;
    centerRowContainerCtrl: RowContainerCtrl;
    leftRowContainerCtrl: RowContainerCtrl;
    rightRowContainerCtrl: RowContainerCtrl;
    bottomCenterRowContainerCtrl: RowContainerCtrl;
    bottomLeftRowContainerCtrl: RowContainerCtrl;
    bottomRightRowContainerCtrl: RowContainerCtrl;
    topCenterRowContainerCtrl: RowContainerCtrl;
    topLeftRowContainerCtrl: RowContainerCtrl;
    topRightRowContainerCtrl: RowContainerCtrl;
    fakeHScrollCtrl: FakeHScrollCtrl;
    gridHeaderCtrl: GridHeaderCtrl;
    centerHeaderRowContainerCtrl: HeaderRowContainerCtrl;
    leftHeaderRowContainerCtrl: HeaderRowContainerCtrl;
    rightHeaderRowContainerCtrl: HeaderRowContainerCtrl;
}
export declare class CtrlsService extends BeanStub {
    private gridCtrl;
    private gridBodyCtrl;
    private centerRowContainerCtrl;
    private leftRowContainerCtrl;
    private rightRowContainerCtrl;
    private bottomCenterRowContainerCtrl;
    private bottomLeftRowContainerCtrl;
    private bottomRightRowContainerCtrl;
    private topCenterRowContainerCtrl;
    private topLeftRowContainerCtrl;
    private topRightRowContainerCtrl;
    private centerHeaderRowContainerCtrl;
    private leftHeaderRowContainerCtrl;
    private rightHeaderRowContainerCtrl;
    private fakeHScrollCtrl;
    private gridHeaderCtrl;
    private ready;
    private readyCallbacks;
    private checkReady;
    whenReady(callback: (p: ReadyParams) => void): void;
    private createReadyParams;
    registerFakeHScrollCtrl(ctrl: FakeHScrollCtrl): void;
    registerGridHeaderCtrl(gridHeaderCtrl: GridHeaderCtrl): void;
    registerCenterRowContainerCtrl(ctrl: RowContainerCtrl): void;
    registerLeftRowContainerCtrl(ctrl: RowContainerCtrl): void;
    registerRightRowContainerCtrl(ctrl: RowContainerCtrl): void;
    registerTopCenterRowContainerCtrl(ctrl: RowContainerCtrl): void;
    registerTopLeftRowContainerCon(ctrl: RowContainerCtrl): void;
    registerTopRightRowContainerCtrl(ctrl: RowContainerCtrl): void;
    registerBottomCenterRowContainerCtrl(ctrl: RowContainerCtrl): void;
    registerBottomLeftRowContainerCtrl(ctrl: RowContainerCtrl): void;
    registerBottomRightRowContainerCtrl(ctrl: RowContainerCtrl): void;
    registerHeaderContainer(ctrl: HeaderRowContainerCtrl, pinned: string | null): void;
    registerGridBodyCtrl(ctrl: GridBodyCtrl): void;
    registerGridCtrl(ctrl: GridCtrl): void;
    getFakeHScrollCtrl(): FakeHScrollCtrl;
    getGridHeaderCtrl(): GridHeaderCtrl;
    getGridCtrl(): GridCtrl;
    getCenterRowContainerCtrl(): RowContainerCtrl;
    getTopCenterRowContainerCtrl(): RowContainerCtrl;
    getBottomCenterRowContainerCtrl(): RowContainerCtrl;
    getGridBodyCtrl(): GridBodyCtrl;
    getHeaderRowContainerCtrls(): HeaderRowContainerCtrl[];
    getHeaderRowContainerCtrl(pinned?: string | null): HeaderRowContainerCtrl;
}
export {};