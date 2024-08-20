export const DummyData = [
  {
    id: "1",
    idUserName: "lucasmontado",
    nameUser: "Lucas Montado",
    contentPost:
      "red-black tree é conhecimento essencial pra javeiro em leet code já rodei em entrevista ao usar HashMap sem explicar quando ele muda de Linked list pra red-black tree",
    imageOfUserProfileUri:
      "https://pbs.twimg.com/profile_images/1761032243663826944/_-Vhop5v_400x400.jpg",
    likesCount: "300",
    commentsCount: "20",
    timestampText: "5h",
  },
  {
    id: "2",
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
    id: "3",
    idUserName: "gustavo_guanabara",
    nameUser: "Gustavo Guanabara",
    contentPost:
      "Você conhece o cara por trás (lá ele) do Mano Deyvin @deyvin? Conheça toda a trajetória e experiência do Deyvid Nascimento no podcast dessa semana 🖖",
    imageOfUserProfileUri:
      "https://pbs.twimg.com/profile_images/961605799830347776/Oy9Amu3w_400x400.jpg",
    likesCount: "2K",
    commentsCount: "75",
    timestampText: "1d",
  },
  {
    id: "4",
    idUserName: "AkitaOnRails",
    nameUser: "Akitando.com",
    contentPost: "F*** pronouns",
    imageOfUserProfileUri:
      "https://pbs.twimg.com/profile_images/1362924757537193990/HhJV6tZe_400x400.jpg",
    likesCount: "1.2K",
    commentsCount: "50",
    timestampText: "2d",
  },
  {
    id: "5",
    idUserName: "kipperdev",
    nameUser: "Fernanda Kipper",
    contentPost:
      "Você já ouviu falar sobre Complexidade de Espaço? 🪐\n\nQuando falamos sobre complexidade de algoritmos, o assunto mais comentado é o tempo de execução dos algoritmos…\n\nMas você sabia que também existe uma complexidade atrelada ao espaço consumido?\n\n#bolhadev",
    imageOfUserProfileUri:
      "https://pbs.twimg.com/profile_images/1736751030035996672/lY34ToBM_400x400.jpg",
    likesCount: "80",
    commentsCount: "5",
    timestampText: "Just now",
  },
];

export const DummyDataUser = {
  lucasmontado: {
    token: "654321",
    idUserName: "lucasmontado",
    nameUser: "Lucas Montado",
    email: "lucasmontado@me.com",
    dateOfBirth: "1985-03-15",
    biography:
      "Lucas Montano no canal Lucas Montano | Lead Engineer no Disney+ | Code Your Life™ without Copilot",
    imageOfUserProfileUri:
      "https://pbs.twimg.com/profile_images/1761032243663826944/_-Vhop5v_400x400.jpg",
    Address: [
      {
        country: "Holanda",
        city: "Amsterdam",
        state: "",
      },
    ],
    webSite: "lucasmontano.com",
    following: 150,
    followers: 120,
    post: ["1"], // IDs dos posts do usuário
  },
  AkitaOnRails: {
    token: "789012",
    idUserName: "AkitaOnRails",
    nameUser: "Akitando.com",
    email: "akita@me.com",
    dateOfBirth: "1982-09-12",
    biography:
      "📽 YouTuber @ http://akitando.com 👷‍♂️ @Codeminer42 co-founder 🤓 Geek Pro: Tech/Games/Movies/Anime 😎 Insta/LinkedIn: @akitaonrails",
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
    post: ["2", "4"], // IDs dos posts do usuário
  },
  gustavo_guanabara: {
    token: "345678",
    idUserName: "gustavo_guanabara",
    nameUser: "Gustavo Guanabara",
    email: "gustavo.guanabara@me.com",
    dateOfBirth: "1978-03-17",
    biography:
      "Professor Universitário, Consultor, Escritor, Palestrante e apaixonado por Tecnologia.",
    imageOfUserProfileUri:
      "https://pbs.twimg.com/profile_images/961605799830347776/Oy9Amu3w_400x400.jpg",
    Address: [
      {
        country: "Brasil",
        city: "Rio de Janeiro",
        state: "RJ",
      },
    ],
    webSite: "youtube.com/cursoemvideo",
    following: 337,
    followers: 61.1,
    post: ["3"], // IDs dos posts do usuário
  },
  kipperdev: {
    token: "901234",
    idUserName: "kipperdev",
    nameUser: "Fernanda Kipper",
    email: "fernanda.kipper@me.com",
    dateOfBirth: "1986-07-22",
    biography:
      "Software Engineer @itau | Microsoft MVP | YouTuber https://youtube.com/@kipperdev",
    imageOfUserProfileUri:
      "https://pbs.twimg.com/profile_images/1736751030035996672/lY34ToBM_400x400.jpg",
    Address: [
      {
        country: "Brasil",
        city: "São Paulo",
        state: "SP",
      },
    ],
    webSite: "https://youtube.com/@kipperdev",
    following: 200,
    followers: 300,
    post: ["5"], // IDs dos posts do usuário
  },
};

export const DummyComments = {
  3: [{ id: "c1", idUserName: "Just", content: "Top!" }],
  4: [
    {
      id: "c5",
      idUserName: "Lucas",
      content: "Que isso paizão KKKKKKKKKKKKK!",
    },
  ],
  5: [
    {
      id: "c5",
      idUserName: "kipperdev",
      content:
        "🤔 O que é?\n\nA Complexidade de Espaco de um algoritmo está diretamente ligada a quantidade de memória que ele precisará consumir durante sua execução.\n\nEla funciona de modo semelhante à complexidade de tempo e pode ser medida através da Notação Big O.",
    },
    {
      id: "c6",
      idUserName: "kipperdev",
      content:
        "📝 Exemplo\n\nO algoritmo merge sort tem uma complexidade de espaço de O(N), porque ele armazena a pilha de execução das chamadas recursivas bem como um array auxiliar para mesclar tudo novamente, então o espaço máximo usado aumenta com o tamanho da entrada.",
    },
    {
      id: "c7",
      idUserName: "kipperdev",
      content:
        "📝 Outro exemplo\n\nO Selection sort tem uma complexidade de espaço de O(1), porque ele somente armazena um valor mínimo e seu índice para comparação, o espaço máximo usado não aumenta com o tamanho da entrada.",
    },
    {
      id: "c8",
      idUserName: "kipperdev",
      content:
        "🔗 Alguns links que podem ajudar\n\nhttps://geeksforgeeks.org/time-and-space-complexity-analysis-of-merge-sort/amp/\n\nhttps://freecodecamp.org/portuguese/news/o-que-e-a-notacao-big-o-complexidade-de-tempo-e-de-espaco/\n\nhttps://dev.to/analaura/complexidade-de-espaco-dos-algoritmos-166a\n\nhttps://geeksforgeeks.org/g-fact-86/amp/",
    },
    { id: "c9", idUserName: "zanfranceschi", content: "Braba demais!" },
  ],
};

export const DummyUserAuthSession = [
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
