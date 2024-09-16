import {ElLoading} from "element-plus";

const lockscreenConfig: {} = {
    fullscreen: true,
    lock: true,
    text: 'Идет загрузка, пожалуйста, подождите',
    background: 'rgba(240, 240, 240, 0.8)',
};

let loadingInstance: any;
const mockLoadingService: {} = {
    close: function (): boolean {
        return true;
    }
};

const lockScreen = (param: string = ''): any => {
    // if (param == 'close') {
    //     if (loadingInstance !== undefined) {
    //         return loadingInstance;
    //     } else {
    //         return mockLoadingService;
    //     }
    // }

    return  ElLoading.service(lockscreenConfig);
}

export default lockScreen;