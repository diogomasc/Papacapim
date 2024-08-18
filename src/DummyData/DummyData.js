export const DummyData = [
	{
		id: "1",
		idUserName: "lucasmontado",
		nameUser: "Lucas Montado",
		contentPost:
			"red-black tree é conhecimento essencial pra javeiro em leet code já rodei em entrevista ao usar HashMap sem explicar quando ele muda de Linked list pra red-black tree",
		imageOfUserProfileUri:
			"https://media.licdn.com/dms/image/C4D03AQGLJF2FkDxn8Q/profile-displayphoto-shrink_400_400/0/1584616292766?e=1729123200&v=beta&t=XtCgX-STtx5UOhqap6wHq2ngnP4doL6z6muZktfmuDU",
		likesCount: "300",
		commentsCount: "20",
		timestampText: "5h",
	},
	{
		id: "2",
		idUserName: "dev_master",
		nameUser: "Roberto Costa",
		contentPost:
			"O Notebook LM do Google é surpreendentemente bom. Use-o para organizar dados, conversar com seus PDFs e construir seu 'segundo cérebro'. Gratuito, ainda experimental, mas muito impressionante até agora.",
		imageOfUserProfileUri:
			"https://uploads.jovemnerd.com.br/wp-content/uploads/2023/01/animes_para_iniciantes_capa__0k2h30w20.jpg?ims=1210x544/filters:quality(75)",
		likesCount: "850",
		commentsCount: "65",
		timestampText: "8d",
	},
	{
		id: "3",
		idUserName: "AkitaOnRails",
		nameUser: "Akitando.com",
		contentPost:
			"R.I.P. todo mundo da velha guarda se foi agora. Triste. E de lá pra cá, nada melhorou.",
		imageOfUserProfileUri:
			"https://pbs.twimg.com/profile_images/1362924757537193990/HhJV6tZe_400x400.jpg",
		likesCount: "1.2K",
		commentsCount: "50",
		timestampText: "2d",
	},
	{
		id: "4",
		idUserName: "gustavo_guanabara",
		nameUser: "Gustavo Guanabara",
		contentPost:
			"Você conhece o cara por trás (lá ele) do Mano Deyvin @deyvin? Conheça toda a trajetória e experiência do Deyvid Nascimento no podcast dessa semana 🖖",
		imageOfUserProfileUri:
			"https://pbs.twimg.com/profile_images/961605799830347776/Oy9Amu3w_400x400.jpg",
		imageOfPostUri:
			"https://i.ytimg.com/vi/g-BjJmbvQZ0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAQWR5elIgYWD70RpQqJEapuusBZg",
		likesCount: "2K",
		commentsCount: "75",
		timestampText: "1d",
	},
	{
		id: "5",
		idUserName: "animesvibes__",
		nameUser: "anime papacapim",
		contentPost:
			"Eu não tenho a menor maturidade pro anime da menina cervo",
		imageOfUserProfileUri:
			"https://pbs.twimg.com/profile_images/1768756935065534465/uu1ui2HT_400x400.jpg",
		imageOfPostUri:
			"https://pbs.twimg.com/media/GULESFFXEAA_7cd?format=jpg&name=small",
		likesCount: "450",
		commentsCount: "35",
		timestampText: "3d",
	},
	{
		id: "6",
		idUserName: "gatinarios",
		nameUser: "gatos fazendo gatices",
		contentPost:
			"gato  barrigudo  burro  enxeu  a barriga  De  mexerica  i  nao  consegue  mais  levanta  com  esse  bucho  avantajado",
		imageOfUserProfileUri:
			"https://pbs.twimg.com/profile_images/1744991772067962880/t8tNXM2C_400x400.jpg",
		imageOfPostUri:
			"https://pbs.twimg.com/media/GRheC3bXgAAUgWy?format=jpg&name=medium",
		likesCount: "150",
		commentsCount: "12",
		timestampText: "7d",
	},
	{
		id: "7",
		idUserName: "AkitaOnRails",
		nameUser: "Akitando.com",
		contentPost:
			"F*** pronouns",
		imageOfUserProfileUri:
			"https://pbs.twimg.com/profile_images/1362924757537193990/HhJV6tZe_400x400.jpg",
		likesCount: "1.2K",
		commentsCount: "50",
		timestampText: "2d",
	},
];

export const DummyDataUser = {
	"lucasmontado": {
		token: "654321",
		idUserName: "lucasmontado",
		nameUser: "Lucas Montado",
		email: "lucasmontado@me.com",
		dateOfBirth: "1985-03-15",
		biography: "Desenvolvedor apaixonado por algoritmos e estruturas de dados.",
		imageOfUserProfileUri:
			"https://media.licdn.com/dms/image/C4D03AQGLJF2FkDxn8Q/profile-displayphoto-shrink_400_400/0/1584616292766?e=1729123200&v=beta&t=XtCgX-STtx5UOhqap6wHq2ngnP4doL6z6muZktfmuDU",
		Address: [
			{
				country: "Brasil",
				city: "São Paulo",
				state: "SP",
			},
		],
		webSite: "https://www.linkedin.com/in/lucasmontado/",
		following: 150,
		followers: 120,
		post: ["1"], // IDs dos posts do usuário
	},
	"dev_master": {
		token: "654321",
		idUserName: "dev_master",
		nameUser: "Roberto Costa",
		email: "roberto.costa@me.com",
		dateOfBirth: "1990-06-25",
		biography: "Entusiasta de tecnologia e inovação, sempre em busca do próximo grande projeto.",
		imageOfUserProfileUri:
			"https://uploads.jovemnerd.com.br/wp-content/uploads/2023/01/animes_para_iniciantes_capa__0k2h30w20.jpg?ims=1210x544/filters:quality(75)",
		Address: [
			{
				country: "Brasil",
				city: "Rio de Janeiro",
				state: "RJ",
			},
		],
		webSite: "https://www.linkedin.com/in/dev_master/",
		following: 80,
		followers: 60,
		post: ["2"], // IDs dos posts do usuário
	},
	"AkitaOnRails": {
		token: "789012",
		idUserName: "AkitaOnRails",
		nameUser: "Akitando.com",
		email: "akita@me.com",
		dateOfBirth: "1982-09-12",
		biography: "Apaixonado por Rails e tudo relacionado a desenvolvimento web.",
		imageOfUserProfileUri:
			"https://pbs.twimg.com/profile_images/1362924757537193990/HhJV6tZe_400x400.jpg",
		Address: [
			{
				country: "Brasil",
				city: "São Paulo",
				state: "SP",
			},
		],
		webSite: "https://www.akitando.com",
		following: 120,
		followers: 95,
		post: ["3, 7"], // IDs dos posts do usuário
	},
	"gustavo_guanabara": {
		token: "345678",
		idUserName: "gustavo_guanabara",
		nameUser: "Gustavo Guanabara",
		email: "gustavo.guanabara@me.com",
		dateOfBirth: "1980-11-30",
		biography: "Educador e entusiasta de programação, sempre procurando compartilhar conhecimento.",
		imageOfUserProfileUri:
			"https://pbs.twimg.com/profile_images/961605799830347776/Oy9Amu3w_400x400.jpg",
		Address: [
			{
				country: "Brasil",
				city: "Fortaleza",
				state: "CE",
			},
		],
		webSite: "https://www.linkedin.com/in/gustavo_guanabara/",
		following: 200,
		followers: 150,
		post: ["4"], // IDs dos posts do usuário
	},
	"animesvibes__": {
		token: "901234",
		idUserName: "animesvibes__",
		nameUser: "anime papacapim",
		email: "anime.papacapim@me.com",
		dateOfBirth: "1995-12-10",
		biography: "Amante de animes e cultura pop japonesa.",
		imageOfUserProfileUri:
			"https://pbs.twimg.com/profile_images/1768756935065534465/uu1ui2HT_400x400.jpg",
		Address: [
			{
				country: "Brasil",
				city: "São Paulo",
				state: "SP",
			},
		],
		webSite: "https://www.animesvibes.com",
		following: 60,
		followers: 45,
		post: ["5"], // IDs dos posts do usuário
	},
	"gatinarios": {
		token: "567890",
		idUserName: "gatinarios",
		nameUser: "gatos fazendo gatices",
		email: "gatos@me.com",
		dateOfBirth: "1992-04-18",
		biography: "Amo gatos e compartilho suas aventuras e desventuras.",
		imageOfUserProfileUri:
			"https://pbs.twimg.com/profile_images/1744991772067962880/t8tNXM2C_400x400.jpg",
		Address: [
			{
				country: "Brasil",
				city: "Belo Horizonte",
				state: "MG",
			},
		],
		webSite: "https://www.gatinarios.com",
		following: 35,
		followers: 20,
		post: ["6"], // IDs dos posts do usuário
	},
};



export const DummyUserAuth = [
	{
		token: "123456",
		idUserName: "diogomasc",
		nameUser: "Diogo Mascarenhas",
		email: "diogomasc@me.com",
		dateOfBirth: "2002-05-20",
		biography:
			"Um dev com vários hobbies e nem todos praticados regularmente, amante dos animais e da nova MPB.",
		imageOfUserProfileUri:
			"https://media.licdn.com/dms/image/v2/D4D03AQFVrLQfEEcJFA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711511718747?e=1729123200&v=beta&t=kGiAr2BQfvcrSbcuUMDaLjwUYwqUjAwihr_U0Yc9Ok8",
		Address: [
			{
				country: "Brasil",
				city: "Feira de Santana",
				state: "BA",
			},
		],
		webSite: "https://www.linkedin.com/in/diogomasc/",
		following: 41,
		followers: 27,
		post: [], // devem ser linkados com o id do usuário por meio de uma chave valor
	},
];