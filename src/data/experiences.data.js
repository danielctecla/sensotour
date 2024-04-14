import {
    EyeIcon,
    SpeakerWaveIcon,
    BugAntIcon,
    FaceFrownIcon,
    UserGroupIcon,
    UserMinusIcon,
    HeartIcon
  } from '@heroicons/react/24/outline'


const experiences = [
    {
        name: 'Ciudad de Mexico',
        experiences:[
            {
                id: 'castillo-chapultepec',
                name: 'Castillo Chapultepec',
                description: 'El Bosque de Chapultepec es uno de los parques urbanos más grandes del mundo y uno de los más visitados en la Ciudad de México. En él se encuentran diversos atractivos turísticos como el Castillo de Chapultepec, el Museo de Historia Natural, el Museo de Arte Moderno, el Lago de Chapultepec, el Zoológico de Chapultepec, entre otros. Es un lugar ideal para disfrutar de la naturaleza, la cultura y la historia en medio de la ciudad.',
                image: 'https://mymodernmet.com/wp/wp-content/uploads/2020/05/Castillo-Chapultepec-4.jpg',
                corousel:[
                    {
                        path: 'https://www.mdzol.com/u/fotografias/m/2021/5/10/f1456x819-1054881_1225251_5050.jpg'
                    },
                    {
                        path: 'https://i1.wp.com/agendasettingdiario.com/wp-content/uploads/2019/04/Chapul.jpg?fit=1200%2C674&ssl=1'
                    },
                    {
                        path: 'https://i.pinimg.com/originals/c1/df/4b/c1df4b684b8f0ba53a9796a98c8165e5.jpg'
                    },
                    {
                        path: 'https://i.pinimg.com/originals/02/53/97/025397901b2e605efee8bee0b042afdf.jpg'
                    }
                ],
                alt_image: 'Chapultepec',
                shortDescription: 'El Bosque de Chapultepec es uno de los parques urbanos más grandes del mundo y uno de los más visitados en la Ciudad de México.',
                prices: [
                    {
                        name:'Publico general',
                        average: '80.00',
                    },
                    {
                        name: 'Menores de 13 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Mayores de 60 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Discapacitados y jubilados',
                        average: 'gratis',
                    }
                ],
                reviews: 5,
                totalcount: 398,
                inclution: [
                    {
                        name: 'Discapacidad Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Todas las edades',
                        icon: UserGroupIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                ],
                days: [
                    {
                        name: 'lunes',
                        horario: 'cerrado'
                    },
                    {
                        name: 'martes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'miércoles',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'jueves',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'viernes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'sábado',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'domingo',
                        horario: '9:00 - 17:00'
                    }
                ]
            },
            {
                id: 'palacio-de-bellas-artes',
                name: 'Palacio de Bellas Artes',
                description: 'El Palacio de Bellas Artes es la casa máxima de la expresión de la cultura en México y en él se presentan las manifestaciones artísticas más representativas de la humanidad. Es un edificio emblemático de la Ciudad de México y uno de los más importantes en el continente americano. Su construcción se inició en 1904 y se concluyó en 1934. En su interior se encuentran murales de los más grandes artistas mexicanos, como Diego Rivera, Rufino Tamayo, David Alfaro Siqueiros, José Clemente Orozco, entre otros.',
                image: 'https://proopera.org.mx/wp-content/uploads/2020/01/1-Palacio-de-Bellas-Artes.jpg',
                corousel:[
                    {
                        path: 'https://img.locationscout.net/images/2016-05/palacio-de-bellas-artes-mexico-city-mexico_l.jpeg'
                    },
                    {
                        path: 'https://mxcity.mx/wp-content/uploads/2015/03/bellasartes1-2-1-1024x768.jpg'
                    },
                    {
                        path: 'https://inba.gob.mx/multimedia/prensa/galerias/14629/14629-IMG_BG_POST-palacio_de_bellas_artes_1.jpeg'
                    },
                    {
                        path: 'https://files.ocula.com/anzax/72/7236bf15-c719-4f07-aed6-01490d2fb026_1200_877.jpg'
                    }
                ],
                alt_image: 'Palacio de Bellas Artes',
                shortDescription: 'El Palacio de Bellas Artes, epicentro de la cultura y las artes en México.',
                prices: [
                    {
                        name:'Publico general',
                        average: '80.00',
                    },
                    {
                        name: 'Menores de 13 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Mayores de 60 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Discapacitados y jubilados',
                        average: 'gratis',
                    }
                ],
                reviews: 4,
                totalcount: 421,
                inclution: [
                    {
                        name: 'Discapacidad Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Todas las edades',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                ],
                days: [
                    {
                        name: 'lunes',
                        horario: 'cerrado'
                    },
                    {
                        name: 'martes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'miércoles',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'jueves',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'viernes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'sábado',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'domingo',
                        horario: '9:00 - 17:00'
                    }
                ]
            },
            {
                id: 'museo-nacional-antropologia',
                name: 'Museo Nacional de Antropología',
                description: 'El Museo Nacional de Antropología es uno de los recintos culturales más importantes de México y de América Latina. Su misión es investigar, conservar, exhibir y difundir los testimonios materiales de los pueblos y culturas indígenas de México, así como de las culturas prehispánicas de otros pueblos del mundo, con el fin de promover la reflexión, el conocimiento y el resPeto a la diversidad cultural.',
                image: 'https://cdn-3.expansion.mx/dims4/default/c9fcf73/2147483647/strip/true/crop/1024x768+0+0/resize/1600x1200!/quality/90/?url=https:%2F%2Fcherry-brightspot.s3.amazonaws.com%2F6b%2F2f%2Fbc08270f4fb09b3cc952919ab47f%2Fmuseo-asntropologia.jpg',
                corousel:[
                    {
                        path: 'https://commonmuse.co/wp-content/uploads/2019/07/MNA1-scaled.jpg'
                    },
                    {
                        path: 'https://mxcity.mx/wp-content/uploads/2018/10/MuseoNacionaldeAntropologia-Mexico-007.jpg'
                    },
                    {
                        path: 'https://i2.wp.com/www.maravillasenmexico.com.mx/wp-content/uploads/2014/12/museo-nacional-1.jpg?w=1280'
                    },
                    {
                        path: 'https://i.pinimg.com/originals/e3/6d/2b/e36d2b89d6a4c9ec00a34ec909055216.jpg'
                    }
                ],
                alt_image: 'Museo Nacional de Antropología',
                shortDescription: 'El Museo Nacional de Antropología es uno de los recintos culturales más importantes de México y de América Latina.',
                prices: [
                    {
                        name:'Publico general',
                        average: '80.00',
                    },
                    {
                        name: 'Menores de 13 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Mayores de 60 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Discapacitados y jubilados',
                        average: 'gratis',
                    }
                ],
                reviews: 4,
                totalcount: 145,
                inclution: [
                    {
                        name: 'Discapacidad Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Todas las edades',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                ],
                days: [
                    {
                        name: 'lunes',
                        horario: 'cerrado'
                    },
                    {
                        name: 'martes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'miércoles',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'jueves',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'viernes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'sábado',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'domingo',
                        horario: '9:00 - 17:00'
                    }
                ]
            },
            {
                id: 'zocalo-cdmx',
                name: 'Zócalo',
                description: 'El Zócalo es la plaza principal de la Ciudad de México y una de las más grandes del mundo. En ella se encuentran edificios históricos como la Catedral Metropolitana, el Palacio Nacional y el Antiguo Palacio del Ayuntamiento. Es un lugar emblemático de la ciudad y un punto de encuentro para los habitantes y visitantes de la capital mexicana.',
                image: 'https://a.cdn-hotels.com/gdcs/production135/d698/e31019f6-9bff-4442-a871-7fc42baeee4a.jpg',
                corousel:[
                    {
                        path: 'https://selecciones.com.mx/wp-content/uploads/2017/07/zocalo_2-1024x758.jpg'
                    },
                    {
                        path: 'https://www.elsoldemexico.com.mx/incoming/aratf2-zocalo.jpg/ALTERNATES/LANDSCAPE_1140/zocalo.jpg'
                    },
                    {
                        path: 'https://traveler.marriott.com/es/wp-content/uploads/sites/2/2018/05/GI-638921937-Mexico-City-Zocalo-1920x1080-1.jpg'
                    },
                    {
                        path: 'https://img.chilango.com/2019/02/Cotidiana_Zocalo_-1.jpg'
                    }
                ],
                alt_image: 'Zocalo',
                shortDescription: 'El Zócalo es la plaza principal de la Ciudad de México y una de las más grandes del mundo.',
                prices: [
                    {
                        name:'Publico general',
                        average: 'gratis',
                    },
                    {
                        name: 'Menores de 13 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Mayores de 60 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Discapacitados y jubilados',
                        average: 'gratis',
                    }
                ],
                reviews: 4,
                totalcount: 465,
                inclution: [
                    {
                        name: 'Discapacidad Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Todas las edades',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                ],
                days: [
                    {
                        name: 'lunes',
                        horario: '24hrs'
                    },
                    {
                        name: 'martes',
                        horario: '24hrs'
                    },
                    {
                        name: 'miércoles',
                        horario: '24hrs'
                    },
                    {
                        name: 'jueves',
                        horario: '24hrs'
                    },
                    {
                        name: 'viernes',
                        horario: '24hrs'
                    },
                    {
                        name: 'sábado',
                        horario: '24hrs'
                    },
                    {
                        name: 'domingo',
                        horario: '24hrs'
                    }
                ]
            },
            {
                id: 'xochimilco',
                name: 'Xochimilco',
                description: 'Xochimilco es uno de los barrios más antiguos y pintorescos de la Ciudad de México y uno de los lugares más visitados por los turistas. Es conocido por sus canales, sus trajineras, sus chinampas y sus fiestas tradicionales. En Xochimilco se pueden disfrutar de paseos en trajinera, recorridos por los canales, visitas a los mercados y a los jardines botánicos, entre otras actividades. Es un lugar ideal para conocer la cultura y la tradición mexicana.',
                image: 'https://cdn.getyourguide.com/img/location/5776711238b1b.jpeg/88.jpg',
                corousel:[
                    {
                        path: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Xochimilco_trajineras.jpg'
                    },
                    {
                        path: 'https://topadventure.com/img/2020/11/13/xoximilco_cancun_1.jpg'
                    },
                    {
                        path: 'https://www.mexicocity.com/media/uploads/mexicocity.com/2019/04/mexico-1354388_1920.jpg'
                    },
                    {
                        path: 'https://i.pinimg.com/originals/61/84/89/61848986214d854009b28c80f4b5256b.jpg'
                    }
                ],
                alt_image: 'Xochimilco',
                shortDescription: 'Xochimilco es uno de los barrios más antiguos y pintorescos de la Ciudad de México y uno de los lugares más visitados por los turistas.',
                prices: [
                    {
                        name:'Publico general',
                        average: 'gratis',
                    },
                    {
                        name: 'Menores de 13 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Mayores de 60 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Discapacitados y jubilados',
                        average: 'gratis',
                    }
                ],
                reviews: 5,
                totalcount: 756,
                inclution: [
                    {
                        name: 'Discapacidad Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Todas las edades',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                ],
                days: [
                    {
                        name: 'lunes',
                        horario: 'cerrado'
                    },
                    {
                        name: 'martes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'miércoles',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'jueves',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'viernes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'sábado',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'domingo',
                        horario: '9:00 - 17:00'
                    }
                ]
                
                
            },
            {
                id: 'angel-de-la-independencia',
                name: 'El Ángel de la Independencia',
                description: '',
                image: 'https://a.cdn-hotels.com/gdcs/production98/d910/dd75e788-3f7a-4ede-8326-94a9025c226d.jpg',
                corousel:[
                    {
                        path: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Xochimilco_trajineras.jpg'
                    },
                    {
                        path: 'https://topadventure.com/img/2020/11/13/xoximilco_cancun_1.jpg'
                    },
                    {
                        path: 'https://www.mexicocity.com/media/uploads/mexicocity.com/2019/04/mexico-1354388_1920.jpg'
                    },
                    {
                        path: 'https://i.pinimg.com/originals/61/84/89/61848986214d854009b28c80f4b5256b.jpg'
                    }
                ],
                alt_image: 'Xochimilco',
                shortDescription: 'Xochimilco es uno de los barrios más antiguos y pintorescos de la Ciudad de México y uno de los lugares más visitados por los turistas.',
                prices: [
                    {
                        name:'Publico general',
                        average: 'gratis',
                    },
                    {
                        name: 'Menores de 13 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Mayores de 60 años',
                        average: 'gratis',
                    },
                    {
                        name: 'Discapacitados y jubilados',
                        average: 'gratis',
                    }
                ],
                reviews: 5,
                totalcount: 756,
                inclution: [
                    {
                        name: 'Discapacidad Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Todas las edades',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                ],
                days: [
                    {
                        name: 'lunes',
                        horario: 'cerrado'
                    },
                    {
                        name: 'martes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'miércoles',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'jueves',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'viernes',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'sábado',
                        horario: '9:00 - 17:00'
                    },
                    {
                        name: 'domingo',
                        horario: '9:00 - 17:00'
                    }
                ]
                
            }
        ]
    },
    //------------------------------------ Not finished, generated with a random generator -----
    // Precio no validados e imágenes no puestas
    // {
    //     name: 'Guadalajara',
    //     experiences: [
    //         {
    //             id: 'hospicio-cabanas',
    //             name: 'Hospicio Cabañas',
    //             description: 'El Hospicio Cabañas es uno de los edificios más emblemáticos de Guadalajara y uno de los más importantes de México. Fue construido en el siglo XIX como un hospicio para albergar a huérfanos, ancianos y discapacitados. En la actualidad es un centro cultural que alberga exposiciones de arte, conciertos, obras de teatro y otras actividades culturales. Su principal atractivo es la colección de murales de José Clemente Orozco, considerada una de las obras maestras del arte mexicano.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/hospicio-cabanas-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/hospicio-cabanas-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/hospicio-cabanas-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/hospicio-cabanas-1.jpg',
    //             alt_image: 'Hospicio Cabañas',
    //             shortDescription: 'El Hospicio Cabañas es uno de los edificios más emblemáticos de Guadalajara y uno de los más importantes de México.',
    //             prices: [
    //                 {
    //                     name:'Entrada general',
    //                     average: 70.00,
    //                 },
    //                 {
    //                     name: 'Entrada gratis los domingos para mexicanos',
    //                     average: 'gratis',
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 98
    //         },
    //         {
    //             id: 'teatro-degollado',
    //             name: 'Teatro Degollado',
    //             description: 'El Teatro Degollado es uno de los teatros más antiguos y emblemáticos de México. Fue inaugurado en 1866 y desde entonces ha sido escenario de importantes eventos culturales como conciertos, óperas, ballets, obras de teatro y conferencias. Su arquitectura neoclásica y su decoración interior lo convierten en un lugar único y especial para disfrutar de la cultura y las artes escénicas en Guadalajara.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/teatro-degollado-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/teatro-degollado-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/teatro-degollado-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/teatro-degollado-1.jpg',
    //             alt_image: 'Teatro Degollado',
    //             shortDescription: 'El Teatro Degollado es uno de los teatros más antiguos y emblemáticos de México.',
    //             prices: [
    //                 {
    //                     name:'Entrada general',
    //                     average: 100.00,
    //                 },
    //                 {
    //                     name: 'Entrada gratis los domingos para mexicanos',
    //                     average: 'gratis',
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 665

    //         },
    //         {
    //             id: 'plaza-de-armas',
    //             name: 'Plaza de Armas',
    //             description: 'La Plaza de Armas es la plaza principal de Guadalajara y uno de los lugares más emblemáticos de la ciudad. En ella se encuentran edificios históricos como la Catedral de Guadalajara, el Palacio de Gobierno, la Rotonda de los Jaliscienses Ilustres y el Teatro Degollado. Es un lugar ideal para pasear, disfrutar de la arquitectura colonial y la vida cotidiana de la ciudad.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/plaza-de-armas-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/plaza-de-armas-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/plaza-de-armas-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/plaza-de-armas-1.jpg',
    //             alt_image: 'Plaza de Armas',
    //             shortDescription: 'La Plaza de Armas es la plaza principal de Guadalajara y uno de los lugares más emblemáticos de la ciudad.',
    //             prices: [
    //                 {
    //                     name:'libre acceso',
    //                     average: 's/n',
    //                 },
    //                 {

    //                 }
    //             ],
    //             reviews: 5,
    //             totalcount: 685
    //         },
    //     ]
    // },
    
    // {
    //     name: 'Monterrey',
    //     experiences: [
    //         {
    //             id: 'parque-fundidora',
    //             name: 'Parque Fundidora',
    //             description: 'El Parque Fundidora es uno de los parques urbanos más grandes y modernos de México. Está ubicado en el centro de Monterrey y ocupa una extensión de 142 hectáreas. En él se encuentran diversos atractivos turísticos como el Paseo Santa Lucía, el Museo de Acero Horno3, el Parque Plaza Sésamo, el Auditorio Banamex, entre otros. Es un lugar ideal para disfrutar de la naturaleza, la cultura y la diversión en medio de la ciudad.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/parque-fundidora-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/parque-fundidora-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/parque-fundidora-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/parque-fundidora-1.jpg',
    //             alt_image: 'Parque Fundidora',
    //             shortDescription: 'El Parque Fundidora es uno de los parques urbanos más grandes y modernos de México.',
    //             prices: [
    //                 {
    //                     name:'libre acceso',
    //                     average: 's/n',
    //                 },
    //                 {

    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 134
    //         },
    //         {
    //             id: 'macroplaza',
    //             name: 'Macroplaza',
    //             description: 'La Macroplaza es la plaza principal de Monterrey y una de las más grandes del mundo. En ella se encuentran edificios históricos como la Catedral Metropolitana, el Palacio de Gobierno, el Palacio Municipal, el Museo de Historia Mexicana, el Museo del Noreste, entre otros. Es un lugar emblemático de la ciudad y un punto de encuentro para los habitantes y visitantes de Monterrey.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/macroplaza-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/macroplaza-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/macroplaza-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/macroplaza-1.jpg',
    //             alt_image: 'Macroplaza',
    //             shortDescription: 'La Macroplaza es la plaza principal de Monterrey y una de las más grandes del mundo.',
    //             prices: [
    //                 {
    //                     name:'libre acceso',
    //                     average: 's/n',
    //                 },
    //                 {

    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 501
    //         },
    //         {
    //             id: 'museo-arte-contemporaneo',
    //             name: 'Museo de Arte Contemporáneo',
    //             description: 'El Museo de Arte Contemporáneo de Monterrey es uno de los recintos culturales más importantes de México y de América Latina. Su misión es investigar, conservar, exhibir y difundir las manifestaciones artísticas más representativas de la contemporaneidad, con el fin de promover la reflexión, el conocimiento y el resPeto a la diversidad cultural.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/museo-de-arte-contemporaneo-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/museo-de-arte-contemporaneo-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/museo-de-arte-contemporaneo-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/museo-de-arte-contemporaneo-1.jpg',
    //             alt_image: 'Museo de Arte Contemporáneo',
    //             shortDescription: 'El Museo de Arte Contemporáneo de Monterrey es uno de los recintos culturales más importantes de México y de América Latina.',
    //             prices: [
    //                 {
    //                     name:'Entrada general',
    //                     average: 50.00,
    //                 },
    //                 {
    //                     name: 'Entrada gratis los domingos para mexicanos',
    //                     average: 'gratis',
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 665
    //         },
    //     ]
    // },
    // {
    //     name: 'Puebla',
    //     experiences: [
    //         {
    //             id: 'zocalo-puebla',
    //             name: 'Catedral de Puebla',
    //             description: 'La Catedral de Puebla es uno de los templos más importantes de México y uno de los más grandes de América Latina. Fue construida en el siglo XVI y es un ejemplo destacado de la arquitectura colonial mexicana. En su interior se encuentran obras de arte de gran valor histórico y cultural, como retablos, pinturas, esculturas y objetos litúrgicos. Es un lugar ideal para conocer la historia y la cultura de Puebla.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/catedral-de-puebla-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/catedral-de-puebla-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/catedral-de-puebla-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/catedral-de-puebla-1.jpg',
    //             alt_image: 'Catedral de Puebla',
    //             shortDescription: 'La Catedral de Puebla es uno de los templos más importantes de México y uno de los más grandes de América Latina.',
    //             prices: [
    //                 {
    //                     name:'Entrada general',
    //                     average: 60.00,
    //                 },
    //                 {
    //                     name: 'Entrada gratis los domingos para mexicanos',
    //                     average: 'gratis',
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 665

    //         }
    //     ]
    // },
    // {
    //     name: 'Oaxaca',
    //     experiences: [
    //         {
    //             id: 'monte-alban',
    //             name: 'Monte Albán',
    //             description: 'Monte Albán es uno de los sitios arqueológicos más importantes de México y una de las ciudades más impresionantes de la civilización zapoteca. Fue una de las ciudades más importantes de Mesoamérica y su arquitectura es un testimonio de su grandeza y esplendor. En Monte Albán se pueden admirar edificios como la Gran Plaza, el Juego de Pelota, el Observatorio, el Palacio, entre otros. Es un lugar ideal para conocer la historia y la cultura de Oaxaca.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/monte-alban-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/monte-alban-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/monte-alban-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/monte-alban-1.jpg',
    //             alt_image: 'Monte Albán',
    //             shortDescription: 'Monte Albán es uno de los sitios arqueológicos más importantes de México y una de las ciudades más impresionantes de la civilización zapoteca.',
    //             prices: [
    //                 {
    //                     name:'Entrada general',
    //                     average: 70.00,
    //                 },
    //                 {
    //                     name: 'Entrada gratis los domingos para mexicanos',
    //                     average: 'gratis',
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 665
    //         },
    //         {
    //             id: 'hierve-el-agua',
    //             name: 'Hierve el Agua',
    //             description: 'Hierve el Agua es un sitio natural único en el mundo y uno de los más impresionantes de México. Se encuentra en la región de los Valles Centrales de Oaxaca y es conocido por sus formaciones rocosas que parecen cascadas Petrificadas. En Hierve el Agua se pueden practicar actividades como el senderismo, el ecoturismo, el turismo de aventura, entre otros. Es un lugar ideal para disfrutar de la naturaleza y la cultura en medio de la Sierra Madre de Oaxaca.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/hierve-el-agua-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/hierve-el-agua-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/hierve-el-agua-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/hierve-el-agua-1.jpg',
    //             alt_image: 'Hierve el Agua',
    //             shortDescription: 'Hierve el Agua es un sitio natural único en el mundo y uno de los más impresionantes de México.',
    //             prices: [
    //                 {
    //                     name:'Entrada general',
    //                     average: 50.00,
    //                 },
    //                 {
    //                     name: 'Entrada gratis los domingos para mexicanos',
    //                     average: 'gratis',
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 665
    //         },
    //         {
    //             id: 'templo-santo-domingo',
    //             name: 'Templo de Santo Domingo',
    //             description: 'El Templo de Santo Domingo es uno de los templos más importantes de Oaxaca y uno de los más bellos de México. Fue construido en el siglo XVI y es un ejemplo destacado de la arquitectura barroca mexicana. En su interior se encuentran obras de arte de gran valor histórico y cultural, como retablos, pinturas, esculturas y objetos litúrgicos. Es un lugar ideal para conocer la historia y la cultura de Oaxaca.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/templo-de-santo-domingo-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/templo-de-santo-domingo-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/templo-de-santo-domingo-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/templo-de-santo-domingo-1.jpg',
    //             alt_image: 'Templo de Santo Domingo',
    //             shortDescription: 'El Templo de Santo Domingo es uno de los templos más importantes de Oaxaca y uno de los más bellos de México.',
    //             prices: [
    //                 {
    //                     name:'Entrada general',
    //                     average: 60.00,
    //                 },
    //                 {
    //                     name: 'Entrada gratis los domingos para mexicanos',
    //                     average: 'gratis',
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 665
    //         }
    //     ]
    // },
    // {
    //     name: 'Yucatán',
    //     experiences: [
    //         {
    //             id: 'catedral-merida',
    //             name: 'Catedral de Mérida',
    //             description: 'La Catedral de Mérida es uno de los templos más importantes de México y uno de los más grandes de América Latina. Fue construida en el siglo XVI y es un ejemplo destacado de la arquitectura colonial mexicana. En su interior se encuentran obras de arte de gran valor histórico y cultural, como retablos, pinturas, esculturas y objetos litúrgicos. Es un lugar ideal para conocer la historia y la cultura de Mérida.',
    //             image: '/mexico_logo.jpg',
    //             image2: '/mexico_logo.jpg',
    //             image3: '/mexico_logo.jpg',
    //             image4: '/mexico_logo.jpg',
    //             alt_image: 'Catedral de Mérida',
    //             shortDescription: 'La Catedral de Mérida es uno de los templos más importantes de México y uno de los más grandes de América Latina.',
    //             prices: [
    //                 {
    //                     name:'Entrada general',
    //                     average: 60.00,
    //                 },
    //                 {
    //                     name: 'Entrada gratis los domingos para mexicanos',
    //                     average: 'gratis',
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 665
    //         },
    //         {
    //             id: 'paseo-montejo',
    //             name: 'Paseo de Montejo',
    //             description: 'El Paseo de Montejo es una de las avenidas más importantes de Mérida y una de las más bellas de México. Fue construida en el siglo XIX y es un ejemplo destacado de la arquitectura neoclásica mexicana. En ella se encuentran edificios históricos como la Casa de Montejo, el Palacio Cantón, el Monumento a la Patria, entre otros. Es un lugar ideal para pasear, disfrutar de la arquitectura colonial y la vida cotidiana de la ciudad.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/paseo-de-montejo-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/paseo-de-montejo-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/paseo-de-montejo-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/paseo-de-montejo-1.jpg',
    //             alt_image: 'Paseo de Montejo',
    //             shortDescription: 'El Paseo de Montejo es una de las avenidas más importantes de Mérida y una de las más bellas de México.',
    //             prices: [
    //                 {
    //                     name:'libre acceso',
    //                     average: 's/n',
    //                 },
    //                 {
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 665
    //         },
    //         {
    //             id: 'gran-museo-mundo-maya',
    //             name: 'Gran Museo del Mundo Maya',
    //             description: 'El Gran Museo del Mundo Maya es uno de los recintos culturales más importantes de México y de América Latina. Su misión es investigar, conservar, exhibir y difundir las manifestaciones artísticas más representativas de la cultura maya, con el fin de promover la reflexión, el conocimiento y el resPeto a la diversidad cultural.',
    //             image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/gran-museo-del-mundo-maya-1.jpg',
    //             image2: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/gran-museo-del-mundo-maya-1.jpg',
    //             image3: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/gran-museo-del-mundo-maya-1.jpg',
    //             image4: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/09/gran-museo-del-mundo-maya-1.jpg',
    //             alt_image: 'Gran Museo del Mundo Maya',
    //             shortDescription: 'El Gran Museo del Mundo Maya es uno de los recintos culturales más importantes de México y de América Latina.',
    //             prices: [
    //                 {
    //                     name:'Entrada general',
    //                     average: 50.00,
    //                 },
    //                 {
    //                     name: 'Entrada gratis los domingos para mexicanos',
    //                     average: 'gratis',
    //                 }
    //             ],
    //             reviews: 4,
    //             totalcount: 665
    //         }
    //     ]
    // },
    
    
]

export function getExperiences(stateName) {
    const state = experiences.find(experience => experience.name === stateName);
    return state ? state.experiences : [];
}

export function getExperienceById(id) {
  for (let state of experiences) {
    for (let experience of state.experiences) {
      if (experience.id === id) {
        return experience;
      }
    }
  }
  return null; // Retorna null si no se encuentra ninguna experiencia con el ID especificado
}