export const VALORES = [
  {
    id: 1,
    title: 'Respeto a la naturaleza',
    desc: 'Cuidan la selva, ríos y animales.',
    image: '/img/valor_naturaleza_1775408804936.png',
    icon: '🌿',
    color: 'emerald',
    fullStory: 'Para las comunidades del Perené, la naturaleza no es un recurso a explotar sino un ser vivo al que se pertenece. Cada árbol, cada río y cada animal es considerado parte de la familia extendida de la comunidad. Esta visión biocéntrica, heredada de generaciones ancestrales, guía cada decisión: cuánto pescar, qué árbol cortar y cómo devolver a la tierra lo que se toma de ella.',
    practices: [
      'Pesca con redes artesanales respetando épocas de veda natural',
      'Agricultura en rotación para no agotar el suelo',
      'Rituales de agradecimiento antes de cada cosecha',
      'Prohibición comunitaria de cazar animales en período de reproducción',
    ]
  },
  {
    id: 2,
    title: 'Solidaridad',
    desc: 'Se ayudan entre vecinos y familia.',
    image: '/img/valor_solidaridad_1775408822363.png',
    icon: '🤝',
    color: 'amber',
    fullStory: 'La solidaridad en el Perené va más allá de la simple ayuda mutua. Es un pacto de vida que une a las familias en momentos de alegría y de crisis. Cuando alguien construye su casa, toda la comunidad trabaja junta. Cuando hay enfermedad, los vecinos traen alimento. Este principio, conocido como "minga" en muchas comunidades andinas y amazónicas, es el tejido invisible que mantiene unido al pueblo.',
    practices: [
      'Mingas: trabajo colectivo para construir viviendas y caminos',
      'Compartir alimentos en épocas de escasez entre familias',
      'Cuidado comunitario de niños y ancianos',
      'Apoyo económico colectivo en bodas y funerales',
    ]
  },
  {
    id: 3,
    title: 'Trabajo comunitario',
    desc: 'Todos colaboran en actividades para el bienestar.',
    image: '/img/valor_trabajo_1775408839117.png',
    icon: '🏗️',
    color: 'sky',
    fullStory: 'El trabajo en el Perené no se entiende como una actividad individual sino como una expresión de identidad colectiva. Desde la siembra hasta la construcción de infraestructura básica, cada tarea se realiza en comunidad. El esfuerzo compartido fortalece los vínculos sociales y garantiza que nadie quede atrás. Este principio ha permitido a las comunidades superar adversidades históricas y mantener su autonomía cultural.',
    practices: [
      'Faenas comunales para mantenimiento de caminos y canales',
      'Siembra y cosecha colectiva de chacras comunitarias',
      'Construcción conjunta de escuelas y centros de salud',
      'Organización rotatoria de guardias y vigilancia comunitaria',
    ]
  },
  {
    id: 4,
    title: 'Respeto a los mayores',
    desc: 'Se valora profundamente la sabiduría ancestral.',
    image: '/img/valor_mayores_1775408855954.png',
    icon: '👴',
    color: 'rose',
    fullStory: 'Los ancianos en las comunidades del Perené son considerados bibliotecas vivas. Son los guardianes del idioma, las tradiciones medicinales, los secretos de la selva y las historias que dan identidad al pueblo. Cada decisión importante de la comunidad se consulta con los mayores, quienes actúan como consejeros espirituales y jueces de la memoria colectiva. Su sabiduría es irreemplazable e insustituible.',
    practices: [
      'Consulta a los ancianos antes de tomar decisiones comunitarias importantes',
      'Transmisión oral de leyendas, canciones y recetas medicinales',
      'Asiento preferencial y prioridad en la distribución de alimentos',
      'Espacios especiales en asambleas y rituales para los mayores',
    ]
  },
];

export const LUGARES = [
  { id: 1, name: 'Río Perené', desc: 'Principal atractivo natural del valle.', category: 'Naturaleza', image: '/img/relato_rio_1775408982815.png', icon: '🌊' },
  { id: 2, name: 'Cataratas de Bayoz', desc: 'Hermosas caídas de agua escalonadas.', category: 'Naturaleza', image: '/img/relato_selva_1775408997347.png', icon: '💦' },
  { id: 3, name: 'Cataratas de Velo de Novia', desc: 'Muy visitadas por turistas nacionales.', category: 'Naturaleza', image: '/img/valor_naturaleza_1775408804936.png', icon: '🌿' },
  { id: 4, name: 'Comunidades nativas', desc: 'Cultura viva y tradiciones.', category: 'Cultura', image: '/img/valor_solidaridad_1775408822363.png', icon: '🌳' }
];

export const COSTUMBRES = [
  {
    id: 1,
    title: 'Vida en la naturaleza',
    desc: 'Agricultura, pesca y recolección.',
    image: '/img/costumbre_vida_1775408873749.png',
    icon: '🌱',
    color: 'green',
    fullStory: 'La vida cotidiana en el Perené está íntimamente ligada a los ritmos de la selva y el río. Las familias organizan su día según las estaciones: épocas de siembra, de cosecha, de pesca abundante y de descanso de la tierra. La agricultura de subsistencia, la pesca artesanal en el río Perené y la recolección de frutos silvestres no son solo fuentes de alimento, sino expresiones de una relación espiritual profunda con el entorno natural.',
    details: [
      'Cultivo de yuca, maíz, plátano y frijoles en chacras familiares',
      'Pesca con arpón, trampa y redes en el río Perené y sus afluentes',
      'Recolección de frutas silvestres como cocona, aguaje y camu camu',
      'Cría de animales menores como gallinas y peces en pozas artesanales',
    ]
  },
  {
    id: 2,
    title: 'Plantas medicinales',
    desc: 'Utilizadas tradicionalmente para curar enfermedades.',
    image: '/img/costumbre_plantas_1775408888098.png',
    icon: '🌿',
    color: 'teal',
    fullStory: 'El conocimiento de las plantas medicinales de la Amazonía es uno de los patrimonios más valiosos de las comunidades del Perené. Durante generaciones, los curanderos y sabios locales han catalogado cientos de especies con propiedades curativas. Este saber, transmitido oralmente de padres a hijos, es una farmacia viva que trata desde simples fiebres hasta enfermedades complejas, y representa un conocimiento que la ciencia moderna apenas comienza a reconocer.',
    details: [
      'Uña de gato: antiinflamatorio natural usado para artritis y sistema inmune',
      'Sangre de grado: cicatrizante poderoso para heridas y úlceras estomacales',
      'Ayahuasca: planta sagrada usada en rituales de sanación espiritual',
      'Chanca piedra: tratamiento natural para cálculos renales y enfermedades del hígado',
    ]
  },
  {
    id: 3,
    title: 'Reuniones comunitarias',
    desc: 'Momentos donde comparten comida y tradiciones.',
    image: '/img/costumbre_reuniones_1775408902957.png',
    icon: '🍽️',
    color: 'orange',
    fullStory: 'Las reuniones comunitarias son el corazón palpitante de la vida social en el Perené. Alrededor de una mesa repleta de platos tradicionales como el juane, el tacacho y el inchicapi, las familias refuerzan sus lazos, resuelven conflictos, toman decisiones colectivas y celebran los hitos de la vida: nacimientos, cosechas, matrimonios. Estas reuniones son también el espacio donde los mayores transmiten sus historias y donde los jóvenes aprenden el significado de pertenecer a una comunidad.',
    details: [
      'Asambleas comunales para decidir asuntos de interés colectivo',
      'Fiestas patronales con música, danza y comida tradicional',
      'Rituales de bienvenida para visitantes con masato y juane',
      'Veladas donde los ancianos narran historias y leyendas de la selva',
    ]
  },
  {
    id: 4,
    title: 'Vestimenta tradicional',
    desc: 'Especialmente conservada en comunidades indígenas.',
    image: '/img/costumbre_ropa_1775408918416.png',
    icon: '🧵',
    color: 'purple',
    fullStory: 'La vestimenta tradicional de las comunidades indígenas del Perené, en especial la cushma Asháninka, es mucho más que una prenda: es un símbolo de identidad, resistencia y pertenencia. Tejida a mano con telares artesanales, cada diseño cuenta una historia y cada color tiene un significado. Para el pueblo Asháninka, ponerse la cushma es reafirmar su vínculo con sus ancestros y proclamar con orgullo su herencia cultural en un mundo que cambia.',
    details: [
      'Cushma Asháninka: túnica de algodón tejida a mano con diseños geométricos sagrados',
      'Coronas de plumas y semillas usadas en ceremonias y festividades importantes',
      'Collares de huayruro (semilla roja y negra) como amuletos de protección',
      'Pinturas corporales con achiote para rituales y celebraciones especiales',
    ]
  },
];

export const RELATOS = [
  { id: 1, title: 'El espíritu del río', desc: 'Protege a la comunidad y a las aguas.', image: '/img/relato_rio_1775408982815.png', icon: '🌊', fullStory: 'Cuentan los ancestros que el río tiene su propio espíritu guardián. En las noches de luna llena, este ser emerge de las aguas cristalinas del Perené para vigilar que los pescadores respeten el equilibrio de la naturaleza. Quienes pescan más de lo que necesitan para alimentar a sus familias, escuchan un murmullo profundo que les advierte. El espíritu es benévolo con quienes agradecen y protegen las aguas, asegurando prosperidad y abundancia para la comunidad.' },
  { id: 2, title: 'Historias de la selva', desc: 'Relatos sobre animales y la naturaleza.', image: '/img/relato_selva_1775408997347.png', icon: '🌳', fullStory: 'En lo profundo de la espesura, los animales hablan cuando los hombres aprenden a escuchar. El Chullachaqui, guardián de los misterios de la selva, camina dejando huellas desiguales para confundir a los madereros que intentan destruir el bosque. Las aves anunciadoras cantan melodías que previenen sobre cambios en el clima o visitantes inesperados. La selva misma respira, siente y recuerda, castigando la codicia y premiando el respeto con sus frutos curativos.' },
  { id: 3, title: 'Relatos de los abuelos', desc: 'Transmisión de enseñanzas y valores.', image: '/img/valor_mayores_1775408855954.png', icon: '👴', fullStory: 'Alrededor de las fogatas, bajo un manto de estrellas tupido y brillante, los abuelos comparten la sabiduría de tiempos inmemoriales. Enseñan que cada árbol tiene un alma y cada hoja que cae tiene un propósito. "Nunca tomes de la selva sin pedir permiso", repiten con voz ronca pero firme. Estas historias orales no son simples cuentos para dormir, sino manuales de supervivencia y guías éticas que han mantenido a las comunidades amazónicas en armonía con su entorno durante siglos.' }
];

export const DANZAS = [
  { id: 1, title: 'Danza Asháninka', desc: 'Representa la vida en la selva, sus rutinas y conexión con el entorno.', image: '/img/danza_ashaninka_1775408948461.png', videoUrl: 'https://www.youtube.com/embed/pI72UzXmR2c' },
  { id: 2, title: 'Danza Shipibo', desc: 'Danza tradicional del pueblo Shipibo filmada en Chanchamayo, corazón de la selva central peruana.', image: '/img/danza_festiva_1775408964162.png', videoUrl: 'https://www.youtube.com/embed/Td_RlqNzVBo' }
];

export const GASTRONOMIA = [
  { 
    id: 1, 
    name: 'Juane', 
    desc: 'Arroz con pollo envuelto en hoja. Un plato clásico y representativo de las fiestas locales.', 
    type: 'Plato Principal', 
    image: '/img/juane_dish_1775408442370.png', 
    badge: 'Popular',
    ingredients: [
      '500g de arroz blanco',
      '4 piezas de pollo (muslos o encuentros)',
      '8 hojas de bijao (para envolver)',
      '4 huevos duros',
      'Aceitunas negras',
      'Especias: palillo (cúrcuma), comino, ajo, sal',
      'Cebolla picada',
      'Manteca de cerdo'
    ],
    preparation: [
      'Cocinar el arroz con un poco de palillo para darle color amarillo.',
      'Sellar las presas de pollo en una sartén con ajo y comino.',
      'Preparar un aderezo con cebolla, ajo y palillo, luego mezclarlo con el arroz cocido.',
      'Extender dos hojas de bijao en cruz, colocar una porción de arroz, una presa de pollo, un huevo duro y aceitunas.',
      'Envolver formando una bola y atar fuertemente con pabilo.',
      'Hervir los juanes en una olla con agua durante 30 a 40 minutos.'
    ],
    additionalInfo: 'El Juane es el plato emblemático de la Fiesta de San Juan (24 de junio). Su forma circular representa la cabeza de San Juan Bautista.'
  },
  { 
    id: 2, 
    name: 'Tacacho con cecina', 
    desc: 'Plátano machacado asado servido con deliciosa carne de cerdo ahumada.', 
    type: 'Tradicional', 
    image: '/img/tacacho_cecina_1775408459432.png', 
    badge: 'Imperdible',
    ingredients: [
      '4 plátanos verdes (bellaco)',
      '200g de cecina (carne de cerdo ahumada)',
      '100g de chicharrón de cerdo picado',
      'Manteca de cerdo',
      'Sal al gusto'
    ],
    preparation: [
      'Pelar los plátanos y cortarlos en trozos.',
      'Freír los plátanos en aceite caliente hasta que estén cocidos pero no dorados.',
      'Machacar los plátanos calientes en un mortero (o bol) agregando manteca y los trozos de chicharrón.',
      'Formar bolas medianas con la masa obtenida.',
      'Freír o asar la cecina hasta que esté bien cocida.',
      'Servir las bolas de tacacho acompañadas de la cecina caliente y salsa de cocona.'
    ],
    additionalInfo: 'El nombre "Tacacho" proviene del quechua "taka chu", que significa "lo golpeado", haciendo referencia al plátano machacado.'
  },
  { 
    id: 3, 
    name: 'Inchicapi', 
    desc: 'Sopa cremosa de maní, cilantro y gallina. Refrescante, intensa y llena de sabor.', 
    type: 'Sopa', 
    image: '/img/inchicapi_soup_1775408472611.png', 
    badge: 'Reconfortante',
    ingredients: [
      '1 gallina de chacra cortada en presas',
      '200g de maní tostado y molido',
      '1/2 taza de harina de maíz',
      '1 manojo de sacha culantro (cilantro de monte)',
      '2 dientes de ajo',
      '1 cebolla picada',
      'Sal y pimienta'
    ],
    preparation: [
      'Hervir la gallina en una olla grande con agua y sal hasta que esté tierna.',
      'Licuar el maní con el sacha culantro, el ajo y un poco de caldo.',
      'Agregar la mezcla licuada a la olla de la gallina.',
      'Disolver la harina de maíz en un poco de agua fría y añadir a la sopa para espesar, removiendo constantemente.',
      'Dejar cocinar a fuego lento por 10-15 minutos más hasta que espese y los sabores se integren.',
      'Servir muy caliente, acompañado de yuca sancochada.'
    ],
    additionalInfo: 'Es una sopa de origen prehispánico. El secreto de un buen inchicapi es el uso de la gallina "de chacra" por su sabor intenso.'
  },
  { 
    id: 4, 
    name: 'Pescado de río', 
    desc: 'Frescos de las aguas amazónicas, usualmente acompañados de yuca frita.', 
    type: 'Pescados', 
    image: '/img/pescado_rio_1775408487790.png', 
    badge: 'Fresco',
    ingredients: [
      '1 pescado entero (Doncella, Paco o Gamitana)',
      'Sal y pimienta al gusto',
      'Limón regional',
      'Yuca fresca para freír',
      'Aceite vegetal',
      'Cebolla y ají charapita para la salsa'
    ],
    preparation: [
      'Limpiar bien el pescado y hacer cortes transversales en los costados.',
      'Sazonar con sal, pimienta y un poco de zumo de limón.',
      'Freír el pescado en abundante aceite caliente hasta que la piel esté crocante y la carne cocida.',
      'Pelar y cortar las yucas en bastones, hervirlas y luego freírlas hasta que doren.',
      'Preparar una salsa criolla con cebolla roja, ají charapita picado y mucho limón.',
      'Servir el pescado con las yucas fritas y la salsa de ají.'
    ],
    additionalInfo: 'Los ríos del Perené proveen una gran variedad de peces. El "Paco" es muy apreciado por su carne blanca y suave.'
  },
  { 
    id: 5, 
    name: 'Frutas amazónicas', 
    desc: 'La dulzura de la región: plátanos, papaya, piña, cocona y camu camu.', 
    type: 'Postres', 
    image: '/img/frutas_amazonicas_1775408503501.png', 
    badge: 'Natural',
    ingredients: [
      'Frutas de estación: Cocona, Camu Camu, Aguaje',
      'Piña Golden regional',
      'Papaya amazónica',
      'Plátano de seda o isla',
      'Miel de abeja regional'
    ],
    preparation: [
      'Lavar y pelar cuidadosamente todas las frutas.',
      'Cortar en cubos medianos para una ensalada de frutas fresca.',
      'Para refrescos: licuar la cocona o el camu camu con agua y un toque de azúcar.',
      'El aguaje se suele consumir pelando la cáscara escamosa y raspando la pulpa naranja.',
      'Servir las frutas frescas al natural para apreciar su perfil de sabor único.'
    ],
    additionalInfo: 'El Camu Camu es una de las frutas con mayor concentración de Vitamina C en el mundo, superando ampliamente a la naranja.'
  }
];
