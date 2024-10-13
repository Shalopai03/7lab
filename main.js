let currentScene = 0;

const scenes = [
    {
        text: "Вы авантюрист в фантастическом мире, вы взяли заказ на уничтожение монстра Баргера и уже отправляетесь в его подземелье полным его кровожадной прислуги. С собой у вас меч, щит, арбалет и болты к нему, знания каста фаербола, немного зелья здоровья и маны, а также факела. Вот вы у входа в пещеру, заходим?",
        background: "url('bonfire.jfif')",
        options: [
            { text: "Зайти", nextScene: 1 },
        ]
    },
    {
        text: "Внутри пещеры темно, вы зажигаете факел и видите 3 развилки над каждой из которых написано: Слава, богатство, похоть. Куда пойдете?", //1
        background: "url('cave.jfif')",
        options: [
            { text: "Слава", nextScene: 2 },
            { text: "Богатство", nextScene: 3 },
            { text: "Похоть", nextScene: 4 }
        ]
    },
    {
        text: "Вы пошли по пути славы и зайдя в комнату видите огромного циклопа с дубиной размером с вас, как будите биться?", //2
        background: "url('cyclops.jfif')",
        options: [
            { text: "Мечом и щитом", nextScene: 5 },
            { text: "Фаерболом", nextScene: 6 },
            { text: "Арбалетом", nextScene: 7 }
        ]
    },
    {
        text: "Вы пошли по пути богатства и зайдя в комнату видите сундук полный золота, что будите делать?", //3
        background: "url('chest.jfif')",
        options: [
            { text: "Взять золото", nextScene: 8 },
            { text: "Пойти дальше", nextScene: 9 },
            { text: "Кастануть фаербол в сундук", nextScene: 10 }
        ]
    },
    {
        text: "Вы пошли по пути похоти и зайдя в комнату видите красноглазую бледнокожую мадмуазель в негляже, что будите делать?", //4
        background: "url('succubus.jfif')",
        options: [
            {text: "Подкатить к мадмуазель", nextScene: 11 },
            { text: "Пойти дальше", nextScene: 12 },
            { text: "Выстрелить в нее из арбалета", nextScene: 13 }
        ]
    },
    {
        text: "Вас вбили в пол дубиной. Смерть.", //5
        background: "url('death.jfif')",
        options: []
    },
    {
        text: "Вы делаете зияющую дырку в животе циклоп и тот падает, вы забираете его голову в качестве трофея! За трупом видите дверь на уровень 2", //6
        background: "url('door.jfif')",
        options: [
            {text: "Пойти на уровень 2", nextScene: 14 }
        ]
    },
    {
        text: "Четким выстрелом в глаз циклоп корчась от боли падает, вы забираете его голову в качестве трофея! За трупом видите дверь на уровень 2", //7
        background: "url('door.jfif')",
        options: [
            {text: "Пойти на уровень 2", nextScene: 14 }
        ]
    },
    {
        text: "Вас сожрал мимик. Смерть.", //8
        background: "url('death.jfif')",
        options: []
    },
    {
        text: "Вы пошли дальше и увидели дверь на уровень 2.", //9
        background: "url('door.jfif')",
        options: [
            {text: "Пойти на уровень 2", nextScene: 14 }
        ]
    },
    {
        text: "Мимик умирает, вы забираете немного золото и идите дальше. Дальше вы видите дверь на уровень 2", //10
        background: "url('door.jfif')",
        options: [
            {text: "Пойти на уровень 2", nextScene: 14 }
        ]
    },
    {
        text: "При попытке подойти к ней она резко кусает в шею и вы умирает. Смерть.", //11
        background: "url('death.jfif')",
        options: []
    },
    {
        text: "При попытке уйти она кусает вас в шею сзади и вы в потоке пофигизма умираете. Смерть.", //12
        background: "url('death.jfif')",
        options: []
    },
    {
        text: "В целях отвлеченния вы делаете ей комплимент, она смущается и вы ловким движением делаете ей еще одну дырку в голову. За ее трупом вы видите дверь на уровень 2", //13
        background: "url('door.jfif')",
        options: [
            {text: "Пойти на уровень 2", nextScene: 14 }
        ]
    },
    {
        text: "Вы попадаете на второй уровень и видите перед собой огромного тролля, который говорит вам 'Загадай загадку, не отгадаю пущу, отгадаю БУУУМ (тресет дубиной размером с вас)', Что будем загадывать. ", //14
        background: "url('troll')",
        options: [
            {text: "Было 2 политеха, где?", nextScene: 15 },
            {text: "Внучек а куда подземелье ведет?", nextScene: 16 },
            {text: "А какие консервы лучше?", nextScene: 17 }
        ]
    },
    {
        text: "Тролль взорвался от вашего вопроса, вы перешли на уровень 3. ", //15
        background: "url('door.jfif')",
        options: [
            {text: "Пойти на уровень 2", nextScene: 18 }
        ]
    },
    {
        text: "Тебе в бороду странник. Смерть. ", //16
        background: "url('death.jfif')",
        options: []
    },
    {
        text: "Из тебя. Смерть. ", //17
        background: "url('death.jfif')",
        options: []
    },
    {
        text: "Перейдя на третий уровень вы видите перед собой лампу с джином, потерев ее от туда тутже вылезает джин и говорит что выполнит одно ваше желание потому что ему лень выполнять 3. Что будем загадывать? ", //18
        background: "url('genie.jfif')",
        options: [
            {text: "Давай по новой миша все фигня", nextScene: 19 },
            {text: "Дай мне вдоволь воды и земли", nextScene: 20 },
            {text: "Дай мне богатств", nextScene: 21 },
            {text: "Приберегу я тебя для другого раза (взять его с собой)", nextScene: 23 }
        ]
    },
    {
        text: "Ну иди в начало квеста. ", //19
        options: []
    },
    {
        text: "После ваших слов он телепортировал вас в глубокий колодец посреди пустыни, мы умрете от голода. Смерть. ", //20
        background: "url('well.jfif')",
        options: []
    },
    {
        text: "После ваших слов он превратил вас в золотую статую. Смерть. ", //21
        background: "url('statue.jfif')",
        options: []
    },
    {
        text: "Вы забрали лампу и перешли на 4 уровень. ", //22
        background: "url('door.jfif')",
        options: [
            {text: "Пойти на уровень 4", nextScene: 23 }
        ]
    },
    {
        text: "Зайдя на 4 уровень вы увидели дряхлого старика, подойдя ближе он сказал 'Отгодаешь мою загадку пойдешь к господину, нет, смерть', Вы кивнули и он начал говорить 'Что такое бипки?' . ", //23
        background: "url('oldman.jfif')",
        options: [
            {text: "Бипки это абстрактное понятие вещи,оно не сущевует.", nextScene: 24 },
            {text: "Пососи чупа-чупс и расскажу", nextScene: 25 },
            {text: "Ударить деда мечом", nextScene: 26 }
        ]
    },
    {
        text: "Смерть. ", //24
        background: "url('death.jfif')",
        options: []
    },
    {
        text: "Вы проходите на уровень 5. ", //25
        background: "url('door.jfif')",
        options: [
            {text: "Пойти на уровень 5", nextScene: 27 }
        ]
    },
    {
        text: "Как не странно дед помер, вы идете к двери за ним. ", //26
        background: "url('door.jfif')",
        options: [
            {text: "Пойти на уровень 5", nextScene: 27 }
        ]
    },
    {
        text: "Перейдя на 5 уровень вы попадаете в чертоги Баргера, его окружают суккубы и ассукубы, вы приветствуете его и вызываете на бой. Он встает в свои 4 метра и достает огромным цвайхандером 2 метра в длину. Вы видите на нем тяжелую непробиваемую броню зачарованную на невосприятие магичекого урона. Как будете убивать эту машину убийства?. ", //27
        background: "url('barger.jfif')",
        options: [
            {text: "Честный бой раз на раз", nextScene: 28 },
            {text: "Убедить его с помощью красноречия", nextScene: 29 },
            {text: "Использовать джинна", nextScene: 30 },
            {text: "Скастовать фаербол", nextScene: 31 }
        ]
    },
    {
        text: "Серьезно? Смерть. ", //28
        background: "url('death.jfif')",
        options: []
    },
    {
        text: "... Смерть. ", //29
        background: "url('death.jfif')",
        options: []
    },
    {
        text: "Именно Баргер и заточил джина. Джин по вашему желанию с удовольствием оставил от Баргера только голову. ", //30
        background: "url('barger_death.jfif')",
        options: [
            {text: "Победа... ну пора и прибарахлиться.", nextScene: 32 },
        ]
    },
    {
        text: "Вы метнули фаербол прямо в Баргера, он отрекошетил в сталактит над ним который и прикончил Баргера. ", //31
        background: "url('barger_death.jfif')",
        options: [
            {text: "Победа... ну пора и прибарахлиться.", nextScene: 32 },
        ]
    },
    {
        text: "Итак вы победили Баргера, что забираем в качестве трофеев?. ", //32
        background: "url('gold.jfif')",
        options: [
            {text: "Трофей и золото.", nextScene: 33 },
            {text: "Трофей и суккуба.", nextScene: 33 },
            {text: "Трофей и ассукуба.", nextScene: 33 }
        ]
    },
    {
        text: "Наш герой закончил этот контракт и счастливый с трофеем пошел получать за него золото и почет. ", //33
        background: "url('pathway.jfif')",
        options: []
    }
];

function chooseOption(optionIndex) {
    const nextScene = scenes[currentScene].options[optionIndex].nextScene;
    loadScene(nextScene);
}

function loadScene(sceneIndex) {
    currentScene = sceneIndex;
    const scene = scenes[sceneIndex];
    document.getElementById("story-text").innerText = scene.text;
    document.getElementById("image-container").style.backgroundImage = scene.background;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = '';  

    if (scene.options.length === 0) {
        document.getElementById("restart").style.display = "block";
    } else {
        document.getElementById("restart").style.display = "none";
        scene.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.onclick = () => chooseOption(index);
            optionsDiv.appendChild(button);
        });
    }
}

function restartGame() {
    loadScene(0);
}

window.onload = () => {
    loadScene(0);
};
