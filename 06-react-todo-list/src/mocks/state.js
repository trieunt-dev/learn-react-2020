let listTasks = localStorage.getItem('listTasks');

if (!listTasks) {
    listTasks = [];
} else {
    try {
        listTasks = JSON.parse(listTasks);
    } catch (error) {
        listTasks = [];
        localStorage.setItem('listTasks', '[]');
    }
}

// const state = [
//     {
//         id: uuid(),
//         name: 'BCD Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//         level: 0,
//     },
//     {
//         id: uuid(),
//         name: 'ABC Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//         level: 0,
//     },

//     {
//         id: uuid(),
//         name: 'CEF Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//         level: 2,
//     },
//     {
//         id: uuid(),
//         name: 'DCF Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//         level: 0,
//     },
//     {
//         id: uuid(),
//         name: 'EGH Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//         level: 1,
//     },
//     {
//         id: uuid(),
//         name: 'FHM Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
//         level: 1,
//     },
// ];

export default listTasks;
