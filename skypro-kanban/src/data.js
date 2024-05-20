export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

export const cardList = [
    {
        id: 1,
        topic: "Web Design", 
        title: "Новая задача 1", 
        date: "30.10.2023", 
        status: statusList[0],
    },

    {
        id: 2,
        topic: "Research", 
        title: "Новая задача 2", 
        date: "30.10.2023", 
        status: statusList[0],
    },

    {
        id: 3,
        topic: "Copywriting", 
        title: "Новая задача 3", 
        date: "30.10.2023", 
        status: statusList[2]
    },

    {
        id: 4,
        topic: "Web Design", 
        title: "Новая задача 4", 
        date: "30.10.2023", 
        status: statusList[3],
    }
];

export const getTopicColor = (topic) => {
    if (topic === "Web Design") {
        return "_orange"
    } else if (topic === "Copywriting") {
        return "_purple"
    } else if (topic === "Research") {
        return "_green"
    } else {return "_gray"}    
}