/*export interface Item {
    title: String;
    link: Object | null;
    icon: String;
    children: Item[];
}

export const menuItems: {
    psychology: Item;
    neuropsychology: Item;
    main: Item;
    tutorial: Item;
    creation: Item;
    gallery: Item;
    drawing: Item;
    applique: Item;
} = {
    main: {
        title: 'Главная',
        link: {name: 'HomePage'},
        icon: 'bi bi-activity',
        children: [],
    },
    neuropsychology: {
        title: 'Нейропсихология',
        link: {name: 'NeuropsychologyPage'},
        icon: 'bi bi-airplane',
        children: [],
    },
    creation: {
        title: 'Творчество',
        link: null,
        icon: 'bi bi-brush',
        children: [],
    },
    gallery: {
        title: 'Галерея работ',
        link: {name: 'GalleryPage'},
        icon: 'bi bi-easel',
        children: [],
    },
    tutorial: {
        title: 'Обучалки',
        link: {name: 'TutorialPage'},
        icon: 'bi bi-easel',
        children: [],
    },
    psychology: {
        title: 'Психология',
        link: {name: 'PsychologyPage'},
        icon: 'bi bi-easel',
        children: [],
    },

    drawing: {
        title: 'Рисунки',
        link: {name: 'DrawingPage'},
        icon: 'bi bi-easel',
        children: [],
    },
    applique: {
        title: 'Аппликации',
        link: {name: 'AppliquePage'},
        icon: 'bi bi-easel',
        children: [],
    },

};
menuItems.creation.children.push(menuItems.drawing);
menuItems.creation.children.push(menuItems.applique);


export const menu: {
    admin: Item[];
    guest: Item[];
    user: Item[];
} = {
    admin: [

        menuItems.main,
    ],
    guest: [
        menuItems.main,
        menuItems.neuropsychology,
        menuItems.creation,
        menuItems.gallery,
        menuItems.tutorial,
        menuItems.psychology,
    ],
    user: [
        menuItems.main,
    ],
};*/

