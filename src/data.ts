/* ------------------------------------------------------------------ */
/*  Vênus Belle — todos os textos, imagens e dados do site vivem aqui  */
/* ------------------------------------------------------------------ */

const img = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;

export const site = {
  nome: "Vênus Belle",
  tagline: "Estética premium em Botafogo",
  whatsapp: "5521996853344",
  whatsappFormatado: "(21) 99685-3344",
  instagram: "@venusbelle.botafogo",
  instagramUrl: "https://instagram.com",
  endereco: {
    logradouro: "Rua Voluntários da Pátria, 190 · Sala 405",
    bairro: "Botafogo",
    cidade: "Rio de Janeiro — RJ",
    cep: "CEP 22270-010",
    mapaUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Volunt%C3%A1rios+da+P%C3%A1tria+190+Botafogo+Rio+de+Janeiro",
  },
  horarios: [
    { dias: "Segunda a sexta", horas: "9h — 20h", destaque: true },
    { dias: "Sábado", horas: "9h — 17h", destaque: false },
    { dias: "Domingo", horas: "Fechado", destaque: false },
  ],
  nota: 4.8,
  notaFormatada: "4,8",
  totalAvaliacoes: 121,
  fundadora: "Marina Duarte",
};

export const waLink = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  imagem: img("photo-1540555700478-4be289fbecef", 1920, 1200),
  imagemAlt: "Ambiente da clínica Vênus Belle: sala de tratamento aquecida por velas, com maca preparada e toalhas claras",
  superlabel: "Botafogo · Rio de Janeiro",
  tituloLinha1: "Cuidado que você sente.",
  tituloLinha2: "Resultado que você vê.",
  subtitulo:
    "Protocolos autorais, tecnologia de ponta e um atendimento que começa na escuta. Há 8 anos elevando o padrão da estética na Zona Sul.",
  ctaPrimario: {
    label: "Agendar pelo WhatsApp",
    mensagem: "Olá, Vênus Belle! Gostaria de agendar uma avaliação. 💛",
  },
  ctaSecundario: { label: "Conheça a clínica", href: "#sobre" },
  scrollCue: "Role",
};

export const tickerItems = [
  "Estética Premium",
  "Botafogo",
  "Seg–Sex até 20h",
  "Sábados até 17h",
  "Agendamento pelo WhatsApp",
  "4,8 no Google",
];

export const servicosSecao = {
  superlabel: "Serviços",
  tituloLinha1: "Rituais, não",
  tituloLinha2: "procedimentos.",
  apoio:
    "Cinco protocolos autorais, do laser à renovação da pele — todos com avaliação prévia e acompanhamento da nossa equipe.",
};

export type Servico = {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  imagemAlt: string;
  chips: string[];
  mensagem: string;
};

export const servicos: Servico[] = [
  {
    id: "depilacao-a-laser",
    nome: "Depilação a Laser",
    descricao:
      "Tecnologia de última geração com ponteira resfriada, segura para todos os tons de pele. Sessões rápidas, praticamente indolores e resultado progressivo desde a primeira aplicação.",
    imagem: img("photo-1596178065887-1198b6148b2b", 1400, 1050),
    imagemAlt: "Profissional realizando procedimento estético com equipamento a laser em sala de atendimento",
    chips: ["Indolor", "Todos os tons de pele", "Pacotes com 6 sessões"],
    mensagem: "Olá! Gostaria de saber mais sobre a Depilação a Laser.",
  },
  {
    id: "limpeza-de-pele-profunda",
    nome: "Limpeza de Pele Profunda",
    descricao:
      "Higienização completa com extração criteriosa, esfoliação enzimática e máscara calmante. Devolve luminosidade sem agredir — o ritual mensal que a sua pele pede.",
    imagem: img("photo-1570172619644-dfd03ed5d881", 1400, 1050),
    imagemAlt: "Cliente de olhos fechados recebendo limpeza de pele com toalhas claras no rosto",
    chips: ["Extração criteriosa", "60 minutos", "Peles oleosas e mistas"],
    mensagem: "Olá! Gostaria de saber mais sobre a Limpeza de Pele Profunda.",
  },
  {
    id: "hidratacao-facial",
    nome: "Hidratação Facial",
    descricao:
      "Infusão de ácido hialurônico e ativos nutritivos com massagem facial drenante. Efeito glow imediato, ideal antes de eventos ou para recuperar a viço da pele cansada.",
    imagem: img("photo-1616394584738-fc6e612e71b9", 1400, 1050),
    imagemAlt: "Aplicação de creme hidratante no rosto com pincel macio durante sessão de hidratação facial",
    chips: ["Ácido hialurônico", "45 minutos", "Glow imediato"],
    mensagem: "Olá! Gostaria de saber mais sobre a Hidratação Facial.",
  },
  {
    id: "drenagem-linfatica",
    nome: "Drenagem Linfática",
    descricao:
      "Manobras precisas que ativam a circulação, reduzem inchaços e promovem bem-estar profundo. Indicada também para pós-operatório, com ritmo ajustado a cada corpo.",
    imagem: img("photo-1544161515-4ab6ce6db874", 1400, 1050),
    imagemAlt: "Sessão de massagem com pedras quentes e toalhas em ambiente de spa",
    chips: ["50 minutos", "Pós-operatório", "Ritmo personalizado"],
    mensagem: "Olá! Gostaria de saber mais sobre a Drenagem Linfática.",
  },
  {
    id: "peeling-quimico",
    nome: "Peeling Químico",
    descricao:
      "Renovação controlada da pele para suavizar manchas, cicatrizes de acne e linhas finas. Protocolo definido em avaliação prévia, respeitando a sensibilidade de cada pele.",
    imagem: img("photo-1598440947619-2c35fc9aa908", 1400, 1050),
    imagemAlt: "Profissional aplicando peeling químico no rosto de uma cliente com pincel fino",
    chips: ["Manchas e textura", "Estimula colágeno", "Avaliação prévia inclusa"],
    mensagem: "Olá! Gostaria de saber mais sobre o Peeling Químico.",
  },
];

export type Metrica = {
  label: string;
  valor?: number;
  decimais?: number;
  sufixo?: string;
  texto?: string;
};

export const sobreSecao: {
  superlabel: string;
  tituloLinha1: string;
  tituloLinha2: string;
  paragrafos: string[];
  quote: { texto: string; autor: string; cargo: string };
  metricas: Metrica[];
  imagem: string;
  imagemAlt: string;
  seloImagem: string;
} = {
  superlabel: "Sobre a clínica",
  tituloLinha1: "Um espaço criado",
  tituloLinha2: "para o seu cuidado.",
  paragrafos: [
    "A Vênus Belle nasceu em 2017 de uma inquietação da esteticista Marina Duarte: por que o cuidado com a pele precisava ser apressado, padronizado ou impessoal? Em uma sala silenciosa no coração de Botafogo, construímos o oposto — um endereço onde cada protocolo começa com escuta e termina no espelho.",
    "Unimos equipamentos de última geração a uma curadoria rigorosa de dermocosméticos, com protocolos desenhados para a pele brasileira. Aqui, você não é um horário na agenda: é uma pele com história, e a gente quer conhecer a sua.",
  ],
  quote: {
    texto:
      "Mais do que procedimentos, entregamos rituais. Cada protocolo nasce de uma escuta — e termina no espelho.",
    autor: site.fundadora,
    cargo: "Fundadora & esteticista-chefe",
  },
  metricas: [
    { valor: 4.8, decimais: 1, sufixo: "★", label: "de média no Google" },
    { valor: 121, decimais: 0, sufixo: "", label: "avaliações de clientes" },
    { texto: "Botafogo", label: "Zona Sul · Rio de Janeiro" },
  ],
  imagem: img("photo-1600334129128-685c5582fd35", 1200, 1560),
  imagemAlt: "Profissional da Vênus Belle realizando massagem facial em cliente durante ritual de cuidado",
  seloImagem: "Desde 2017 · Botafogo",
};

export const depoimentosSecao = {
  superlabel: "Depoimentos",
  tituloLinha1: "Quem sente,",
  tituloLinha2: "recomenda.",
  apoio: "Avaliações reais de quem confia a própria pele à Vênus Belle.",
};

export type Depoimento = {
  nome: string;
  texto: string;
  nota: number;
  cidade: string;
  servico: string;
};

export const depoimentos: Depoimento[] = [
  {
    nome: "Fernanda Albuquerque",
    texto:
      "Cheguei cética depois de experiências ruins em outras clínicas. Fizeram avaliação da minha pele, explicaram cada etapa — e o resultado superou: seis sessões de laser e praticamente nada de pelo.",
    nota: 5,
    cidade: "Botafogo",
    servico: "Depilação a Laser",
  },
  {
    nome: "Camila Rezende",
    texto:
      "A limpeza de pele mais criteriosa que já fiz. Extração sem agressão, massagem deliciosa e minha pele saiu iluminada por semanas. Virou meu ritual mensal sagrado.",
    nota: 5,
    cidade: "Flamengo",
    servico: "Limpeza de Pele",
  },
  {
    nome: "Juliana Prado",
    texto:
      "Faço drenagem toda semana há um ano. Além do resultado visível, é o momento mais leve da minha semana. Equipe pontual, ambiente impecável, música na medida.",
    nota: 5,
    cidade: "Laranjeiras",
    servico: "Drenagem Linfática",
  },
  {
    nome: "Beatriz Lemos",
    texto:
      "O peeling suavizou muito as minhas manchas de sol. Gostei da honestidade da Marina, que ajustou o protocolo para a minha pele sensível em vez de empurrar o tratamento mais caro.",
    nota: 4,
    cidade: "Copacabana",
    servico: "Peeling Químico",
  },
  {
    nome: "Renata Vidal",
    texto:
      "Marquei pela praticidade do WhatsApp e fiquei pela experiência. A hidratação deixou minha pele perfeita para as fotos do casamento. Recomendo de olhos fechados.",
    nota: 5,
    cidade: "Urca",
    servico: "Hidratação Facial",
  },
];

export const localizacaoSecao = {
  superlabel: "Onde estamos",
  tituloLinha1: "No coração",
  tituloLinha2: "de Botafogo.",
  descricao:
    "A cinco minutos do metrô Botafogo, em um edifício com portaria e elevador. Agende pelo WhatsApp e receba a confirmação na hora.",
  mapaSrc:
    "https://www.google.com/maps?q=Rua+Volunt%C3%A1rios+da+P%C3%A1tria+190+Botafogo+Rio+de+Janeiro&output=embed",
  acessibilidade: "Entrada e sanitários com acesso para cadeirantes. Portaria no térreo.",
  ctaWhatsapp: "Agendar pelo WhatsApp",
  ctaMapa: "Abrir no Google Maps",
};

export const footerSecao = {
  superlabel: "Agende o seu momento",
  chamadaLinha1: "O seu momento",
  chamadaLinha2: "começa com uma mensagem.",
  ctaLabel: "Falar pelo WhatsApp",
  mensagem: "Olá, Vênus Belle! Vim pelo site e quero agendar um horário.",
  descricaoMarca:
    "Clínica de estética premium em Botafogo. Rituais autorais, tecnologia de ponta e o cuidado que a sua pele merece.",
  creditos: "Feito com cuidado em Botafogo.",
};
