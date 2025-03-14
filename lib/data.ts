export interface Event {
  id: string
  title: string
  description: string
  longDescription?: string
  date: string
  time: string
  location: string
  category: string
  price: number
  attendees: number
  image: string
}

export const events: Event[] = [
  {
    id: "1",
    title: "Conferência de Tecnologia 2024",
    description:
      "Participe da maior conferência de tecnologia do ano. Faça networking com líderes do setor, participe de workshops e conheça as mais recentes tecnologias.",
    longDescription:
      "A Conferência de Tecnologia 2024 reúne as mentes mais brilhantes em tecnologia para uma experiência imersiva de dois dias. De IA e aprendizado de máquina a blockchain e cibersegurança, nossos palestrantes especialistas abordarão os tópicos mais inovadores que moldam nosso futuro digital.\n\nA conferência apresenta:\n- Palestras de líderes do setor\n- Workshops interativos e laboratórios práticos\n- Oportunidades de networking com profissionais de tecnologia\n- Demonstrações de produtos de empresas líderes\n- Feira de carreiras com os principais empregadores de tecnologia\n\nSeja você um desenvolvedor experiente, um empreendedor de tecnologia ou simplesmente apaixonado por tecnologia, esta conferência oferece insights valiosos e conexões para ajudá-lo a se manter à frente no cenário tecnológico em rápida evolução.",
    date: "2024-08-15",
    time: "9:00 - 18:00",
    location: "Centro de Convenções, Centro",
    category: "Tecnologia",
    price: 299,
    attendees: 1250,
    image:
      "https://www.icc.fiocruz.br/wp-content/uploads/2024/05/speaker-giving-talk-scientific-conference-audience-conference-hall-business-entrepreneurship-concept.jpg?rect=27,233,345,133",
  },
  {
    id: "2",
    title: "Workshop de Design: Fundamentos de UI/UX",
    description:
      "Um workshop prático focado em princípios de design de UI/UX. Aprenda a criar experiências de usuário intuitivas e envolventes para aplicações web e mobile.",
    longDescription:
      "Este workshop intensivo é projetado para designers iniciantes e intermediários que desejam fortalecer suas habilidades de UI/UX. Nossos instrutores experientes irão guiá-lo por todo o processo de design, desde pesquisa de usuários e wireframing até prototipagem e testes de usabilidade.\n\nTópicos abordados incluem:\n- Princípios de design centrado no usuário\n- Arquitetura de informação\n- Hierarquia visual e layout\n- Teoria das cores e tipografia\n- Padrões de design de interação\n- Design responsivo\n- Métodos de teste de usabilidade\n\nOs participantes trabalharão em um projeto do mundo real durante o workshop, aplicando os conceitos aprendidos para criar um design de UI/UX abrangente. Ao final da sessão, você terá um projeto pronto para portfólio e as habilidades para enfrentar desafios de design em seu trabalho profissional.",
    date: "2024-07-22",
    time: "10:00 - 16:00",
    location: "Hub Criativo, Zona Leste",
    category: "Design",
    price: 149,
    attendees: 45,
    image:
      "https://plenusvita.com.br/wp-content/uploads/2016/12/plenus-vita-palestras-1.jpg?rect=373,233,345,133",
  },
  {
    id: "3",
    title: "Encontro de Networking para Startups",
    description:
      "Conecte-se com outros empreendedores, investidores e entusiastas de startups. Compartilhe ideias, encontre potenciais colaboradores e expanda sua rede profissional.",
    longDescription:
      "Nosso Encontro de Networking para Startups proporciona um ambiente descontraído, mas produtivo, para empreendedores em todos os estágios se conectarem e colaborarem. Se você está procurando um co-fundador, buscando investimento ou simplesmente deseja trocar ideias com pessoas com ideias semelhantes, este evento oferece oportunidades valiosas para expandir sua rede.\n\nA noite inclui:\n- Pitches relâmpago de startups selecionadas\n- Discussões em mesa redonda sobre os principais desafios das startups\n- Sessões de matchmaking individuais com investidores\n- Bebidas e aperitivos gratuitos\n- Área de exposição para demonstrações de produtos\n\nNão perca esta chance de expandir seu círculo profissional e obter insights de outros no ecossistema de startups. Traga seus cartões de visita e esteja pronto para fazer conexões significativas que podem ajudar a levar seu empreendimento ao próximo nível.",
    date: "2024-06-30",
    time: "18:30 - 21:30",
    location: "Hub de Inovação, Zona Oeste",
    category: "Networking",
    price: 0,
    attendees: 120,
    image:
      "https://via.ufsc.br/wp-content/uploads/2019/03/rawpixel-653764-unsplash-1-980x370.jpg?rect=720,233,345,133",
  },
  {
    id: "4",
    title: "Bootcamp de Desenvolvimento Web",
    description:
      "Bootcamp intensivo de 3 dias cobrindo tecnologias modernas de desenvolvimento web. Perfeito para iniciantes e para quem deseja atualizar suas habilidades.",
    longDescription:
      "Este bootcamp abrangente levará você dos conceitos básicos à construção de aplicações web full-stack em apenas três dias. Nossos instrutores especializados fornecem orientação prática enquanto você aprende através de exercícios práticos e projetos do mundo real.\n\nDia 1: HTML, CSS e Design Responsivo\n- Elementos semânticos HTML5\n- Estilização e layouts com CSS3\n- Design responsivo com media queries\n- Frameworks CSS (Bootstrap, Tailwind)\n\nDia 2: JavaScript e Frameworks Frontend\n- Fundamentos de JavaScript\n- Manipulação do DOM\n- Introdução ao React.js\n- Construção de interfaces de usuário interativas\n\nDia 3: Desenvolvimento Backend e Implantação\n- Node.js e Express\n- Integração com banco de dados\n- Autenticação e desenvolvimento de API\n- Implantação em plataformas cloud\n\nAo final deste bootcamp, você terá construído vários projetos para seu portfólio e adquirido as habilidades necessárias para continuar sua jornada de desenvolvimento web com confiança.",
    date: "2024-09-10",
    time: "9:00 - 17:00",
    location: "Campus de Tecnologia, Zona Norte",
    category: "Educação",
    price: 499,
    attendees: 30,
    image:
      "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/3721/s1200/dev-bootcamp-alternatives-austin.png?rect=27,649,345,133",
  },
  {
    id: "5",
    title: "Summit de Gestão de Produtos",
    description:
      "Uma conferência dedicada às melhores práticas de gestão de produtos, com palestras de líderes de produto de empresas de destaque.",
    longDescription:
      "O Summit de Gestão de Produtos reúne gerentes, diretores e executivos de produto para compartilhar insights, estratégias e melhores práticas para a construção de produtos de sucesso. Aprenda com veteranos do setor que lançaram e escalaram produtos usados por milhões.\n\nDestaques da conferência:\n- Apresentações de CPOs e VPs de Produto\n- Painéis de discussão sobre estratégia de produto e roadmapping\n- Estudos de caso de lançamentos de produtos bem-sucedidos (e fracassados)\n- Workshops sobre pesquisa de usuários, priorização e métricas de produto\n- Oportunidades de networking com profissionais de produto\n\nSeja você novo na gestão de produtos ou um líder experiente, este summit oferece conhecimentos e conexões valiosas para ajudá-lo a se destacar em sua carreira de produto. Junte-se a nós para um dia de aprendizado, compartilhamento e conexão com a comunidade de gestão de produtos.",
    date: "2024-10-05",
    time: "8:30 - 17:30",
    location: "Centro Empresarial, Distrito Financeiro",
    category: "Negócios",
    price: 349,
    attendees: 200,
    image:
      "https://miro.medium.com/v2/resize:fit:537/1*ho9zRmK3wnQPb0Ftp8NYlg.jpeg?rect=373,649,345,133",
  },
  {
    id: "6",
    title: "Simpósio de IA na Saúde",
    description:
      "Explore a interseção entre inteligência artificial e saúde. Saiba como a IA está transformando o atendimento ao paciente, diagnósticos e pesquisa médica.",
    longDescription:
      "Este simpósio reúne profissionais de saúde, pesquisadores de IA e inovadores do setor para discutir as aplicações atuais e futuras da inteligência artificial na saúde.\n\nTópicos incluem:\n- Ferramentas de diagnóstico baseadas em IA e sua validação clínica\n- Aprendizado de máquina para planos de tratamento personalizados\n- Considerações éticas na IA para saúde\n- Desafios regulatórios e conformidade\n- IA na descoberta e desenvolvimento de medicamentos\n- Análise preditiva para resultados de pacientes\n- Integração de sistemas de IA com infraestrutura de saúde existente\n\nAtravés de apresentações, painéis de discussão e demonstrações interativas, os participantes obterão insights sobre como a IA está revolucionando a prestação de cuidados de saúde e melhorando os resultados dos pacientes. Junte-se a nós para explorar as possibilidades e desafios na vanguarda da inovação em saúde.",
    date: "2024-11-12",
    time: "9:00 - 16:00",
    location: "Centro de Pesquisa Médica",
    category: "Saúde",
    price: 275,
    attendees: 150,
    image:
      "https://img.buzzfeed.com/buzzfeed-static/static/2015-10/14/17/enhanced/webdr13/original-10716-1444858236-11.jpg?rect=720,649,345,133",
  },
]

