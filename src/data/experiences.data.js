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
        //This is to show the best experiences in Mexico
        name: '',
        experiences: [
            {   
                id: 'chichen-itza',
                name: 'Chichen Itza',
                description: 'Chichén Itzá es uno de los sitios arqueológicos más importantes de México y una de las Nuevas Maravillas del Mundo. Fue una de las ciudades más importantes de la civilización maya y su arquitectura es un testimonio de su grandeza y esplendor. En Chichén Itzá se pueden admirar edificios como la Pirámide de Kukulkán, el Templo de los Guerreros, el Observatorio, el Juego de Pelota, entre otros. Es un lugar ideal para conocer la historia y la cultura de México.',
                image: 'https://th.bing.com/th/id/OIP.-ES51-95mOpYB_tlQeiMkQHaFj?rs=1&pid=ImgDetMain',
                image2: 'https://th.bing.com/th/id/OIP.-ES51-95mOpYB_tlQeiMkQHaFj?rs=1&pid=ImgDetMain',
                image3: 'https://th.bing.com/th/id/OIP.-ES51-95mOpYB_tlQeiMkQHaFj?rs=1&pid=ImgDetMain',
                image4: 'https://th.bing.com/th/id/OIP.-ES51-95mOpYB_tlQeiMkQHaFj?rs=1&pid=ImgDetMain',
                alt_image: 'Chichen Itza',
                shortDescription: 'Chichén Itzá es uno de los sitios arqueológicos más importantes de México y una de las Nuevas Maravillas del Mundo.',
                prices: [
                    {
                        name:'Entrada general',
                        average: 600.00,
                    },
                    {
                        name: 'Entrada gratis los domingos para mexicanos',
                        average: 'gratis',
                    }
                ],
                reviews: 5,
                totalcount: 1097
                
            },
            {
                id: 'teotihuacan',
                name: 'Teotihuacan',
                description: 'Teotihuacán es una de las ciudades prehispánicas más importantes de México y una de las más visitadas por los turistas. Fue una de las ciudades más grandes y poderosas de Mesoamérica y su arquitectura es un testimonio de su grandeza y esplendor. En Teotihuacán se pueden admirar edificios como la Pirámide del Sol, la Pirámide de la Luna, la Calzada de los Muertos, el Templo de Quetzalcóatl, entre otros. Es un lugar ideal para conocer la historia y la cultura de México.',
                image: 'https://cdn.britannica.com/42/178942-050-5CF05C54/Pyramid-Moon-Teotihuacan-Mexico.jpg',
                image2: 'https://cdn.britannica.com/42/178942-050-5CF05C54/Pyramid-Moon-Teotihuacan-Mexico.jpg',
                image3: 'https://cdn.britannica.com/42/178942-050-5CF05C54/Pyramid-Moon-Teotihuacan-Mexico.jpg',
                image4: 'https://cdn.britannica.com/42/178942-050-5CF05C54/Pyramid-Moon-Teotihuacan-Mexico.jpg',
                alt_image: 'Teotihuacan',
                shortDescription: 'Teotihuacán es una de las ciudades prehispánicas más importantes de México y una de las más visitadas por los turistas.',
                prices: [
                    {
                        name:'Entrada general',
                        average: 80.00,
                    },
                    {
                        name: 'Entrada gratis los domingos para mexicanos',
                        average: 'gratis',
                    }
                ],
                reviews: 4,
                totalcount: 665,
                inclution: [
                    {
                        name: 'Física'
                    },
                    {
                        name: 'Visual'
                    },
                    {
                        name: 'Auditiva'
                    },
                    {
                        name: 'Pet-friendly'
                    },
                    {
                        name: 'Genero'
                    },
                    {
                        name: 'Edad'
                    },
                    {
                        name: 'Emocional'
                    }
                ]
            },
            {
                id: 'palenque',
                name: 'Palenque',
                description: 'Palenque es uno de los sitios arqueológicos más importantes de México y una de las ciudades más impresionantes de la civilización maya. Fue una de las ciudades más importantes de Mesoamérica y su arquitectura es un testimonio de su grandeza y esplendor. En Palenque se pueden admirar edificios como el Templo de las Inscripciones, el Palacio, el Templo de la Cruz, el Templo del Sol, entre otros. Es un lugar ideal para conocer la historia y la cultura de México.',
                image: 'https://www.bonplanvoyage.net/wordpress2012/wp-content/uploads/temple-palenque-chiapas-e1613131582383.jpg',
                image2: 'https://www.bonplanvoyage.net/wordpress2012/wp-content/uploads/temple-palenque-chiapas-e1613131582383.jpg',
                image3: 'https://www.bonplanvoyage.net/wordpress2012/wp-content/uploads/temple-palenque-chiapas-e1613131582383.jpg',
                image4: 'https://www.bonplanvoyage.net/wordpress2012/wp-content/uploads/temple-palenque-chiapas-e1613131582383.jpg',
                shortDescription: 'Palenque es uno de los sitios arqueológicos más importantes de México y una de las ciudades más impresionantes de la civilización maya.',
                prices: [
                    {
                        name:'Entrada general',
                        average: 80.00,
                    },
                    {
                        name: 'Entrada gratis los domingos para mexicanos',
                        average: 'gratis',
                    }
                ],
                reviews: 4,
                totalcount: 398,
                inclution: [
                    {
                        name: 'Física'
                    },
                    {
                        name: 'Visual'
                    },
                    {
                        name: 'Auditiva'
                    },
                    {
                        name: 'Pet-friendly'
                    },
                    {
                        name: 'Genero'
                    },
                    {
                        name: 'Edad'
                    },
                    {
                        name: 'Emocional'
                    }
                ]
            },
            {   
                id: 'cancun',
                name: 'Cancun',
                description: 'Cancún es uno de los destinos turísticos más populares de México y uno de los más visitados en el mundo. Sus playas de arena blanca, aguas turquesas y clima cálido lo convierten en un lugar ideal para disfrutar de unas vacaciones inolvidables. En Cancún se pueden practicar actividades como el buceo, el snorkel, el kayak, el paddleboard, el parasailing, entre otros. Es un lugar ideal para relajarse, divertirse y disfrutar de la naturaleza en medio del Caribe.',
                image: 'https://expertvagabond.com/wp-content/uploads/cancun-things-to-do-guide.jpg',
                image2: 'https://expertvagabond.com/wp-content/uploads/cancun-things-to-do-guide.jpg',
                image3: 'https://expertvagabond.com/wp-content/uploads/cancun-things-to-do-guide.jpg',
                image4: 'https://expertvagabond.com/wp-content/uploads/cancun-things-to-do-guide.jpg',
                alt_image: 'Cancun',
                shortDescription: 'Cancún es uno de los destinos turísticos más populares de México y uno de los más visitados en el mundo.',
                prices: [
                    {
                        name:'libre acceso',
                        average: 0,
                    },
                    {
                        
                    }
                ],
                reviews: 5,
                totalcount: 1665,
                inclution: [
                    {
                        name: 'Física'
                    },
                    {
                        name: 'Visual'
                    },
                    {
                        name: 'Auditiva'
                    },
                    {
                        name: 'Pet-friendly'
                    },
                    {
                        name: 'Genero'
                    },
                    {
                        name: 'Edad'
                    },
                    {
                        name: 'Emocional'
                    }
                ]
            }
        ]
    },
    {
        name: 'Ciudad de Mexico',
        experiences:[
            {
                id: 'palacio-de-bellas-artes',
                name: 'Palacio de Bellas Artes',
                description: 'El Palacio de Bellas Artes es la casa máxima de la expresión de la cultura en México y en él se presentan las manifestaciones artísticas más representativas de la humanidad. Es un edificio emblemático de la Ciudad de México y uno de los más importantes en el continente americano. Su construcción se inició en 1904 y se concluyó en 1934. En su interior se encuentran murales de los más grandes artistas mexicanos, como Diego Rivera, Rufino Tamayo, David Alfaro Siqueiros, José Clemente Orozco, entre otros.',
                image: 'https://proopera.org.mx/wp-content/uploads/2020/01/1-Palacio-de-Bellas-Artes.jpg',
                image2: 'https://proopera.org.mx/wp-content/uploads/2020/01/1-Palacio-de-Bellas-Artes.jpg',
                image3: 'https://proopera.org.mx/wp-content/uploads/2020/01/1-Palacio-de-Bellas-Artes.jpg',
                image4: 'https://proopera.org.mx/wp-content/uploads/2020/01/1-Palacio-de-Bellas-Artes.jpg',
                alt_image: 'Palacio de Bellas Artes',
                shortDescription: 'El Palacio de Bellas Artes es la casa máxima de la expresión de la cultura en México y en él se presentan las manifestaciones artísticas más representativas de la humanidad.',
                prices: [
                    {
                        name:'Entrada general',
                        average: 80.00,
                    },
                    {
                        name: 'Entrada gratis los domingos',
                        average: 'gratis',
                    }
                ],
                reviews: 4,
                totalcount: 421,
                inclution: [
                    {
                        name: 'Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar no es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Visual',
                        icon: EyeIcon,
                        iconForeground: 'text-purple-700',
                        iconBackground: 'bg-purple-50',
                        text: 'Este lugar es ideal para personas con discapacidad Visual.'
                    },
                    {
                        name: 'Auditiva',
                        icon: SpeakerWaveIcon,
                        iconForeground: 'text-sky-700',
                        iconBackground: 'bg-sky-50',
                        text: 'Este lugar es ideal para personas con discapacidad Auditiva.'
                    },
                    {
                        name: 'Pet-friendly',
                        icon: BugAntIcon,
                        iconForeground: 'text-rose-700',
                        iconBackground: 'bg-rose-50',
                        text: 'Este lugar es ideal para disfrutar con tu mascota.'
                    },
                    {
                        name: 'Genero',
                        icon: UserGroupIcon,
                        iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50',
                        text: 'Este lugar es para todas las personas, sin importar su género.'
                    },
                    {
                        name: 'Edad',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                    {
                        name: 'Emocional',
                        icon: HeartIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es ideal para disfrutar en familia, con amigos o en pareja.'
                    }
                ]
            },
            {
                id: 'museo-nacional-antropologia',
                name: 'Museo Nacional de Antropología',
                description: 'El Museo Nacional de Antropología es uno de los recintos culturales más importantes de México y de América Latina. Su misión es investigar, conservar, exhibir y difundir los testimonios materiales de los pueblos y culturas indígenas de México, así como de las culturas prehispánicas de otros pueblos del mundo, con el fin de promover la reflexión, el conocimiento y el resPeto a la diversidad cultural.',
                image: 'https://cdn-3.expansion.mx/dims4/default/c9fcf73/2147483647/strip/true/crop/1024x768+0+0/resize/1600x1200!/quality/90/?url=https:%2F%2Fcherry-brightspot.s3.amazonaws.com%2F6b%2F2f%2Fbc08270f4fb09b3cc952919ab47f%2Fmuseo-asntropologia.jpg',
                image2: 'https://cdn-3.expansion.mx/dims4/default/c9fcf73/2147483647/strip/true/crop/1024x768+0+0/resize/1600x1200!/quality/90/?url=https:%2F%2Fcherry-brightspot.s3.amazonaws.com%2F6b%2F2f%2Fbc08270f4fb09b3cc952919ab47f%2Fmuseo-asntropologia.jpg',
                image3: 'https://cdn-3.expansion.mx/dims4/default/c9fcf73/2147483647/strip/true/crop/1024x768+0+0/resize/1600x1200!/quality/90/?url=https:%2F%2Fcherry-brightspot.s3.amazonaws.com%2F6b%2F2f%2Fbc08270f4fb09b3cc952919ab47f%2Fmuseo-asntropologia.jpg',
                image4: 'https://cdn-3.expansion.mx/dims4/default/c9fcf73/2147483647/strip/true/crop/1024x768+0+0/resize/1600x1200!/quality/90/?url=https:%2F%2Fcherry-brightspot.s3.amazonaws.com%2F6b%2F2f%2Fbc08270f4fb09b3cc952919ab47f%2Fmuseo-asntropologia.jpg',
                alt_image: 'Museo Nacional de Antropología',
                shortDescription: 'El Museo Nacional de Antropología es uno de los recintos culturales más importantes de México y de América Latina.',
                prices: [
                    {
                        name:'Entrada general',
                        average: 95.00,
                    },
                    {
                        name: 'Entrada gratis los domingos',
                        average: 'gratis',
                    }
                ],
                reviews: 4,
                totalcount: 145,
                inclution: [
                    {
                        name: 'Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar no es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Visual',
                        icon: EyeIcon,
                        iconForeground: 'text-purple-700',
                        iconBackground: 'bg-purple-50',
                        text: 'Este lugar es ideal para personas con discapacidad Visual.'
                    },
                    {
                        name: 'Auditiva',
                        icon: SpeakerWaveIcon,
                        iconForeground: 'text-sky-700',
                        iconBackground: 'bg-sky-50',
                        text: 'Este lugar es ideal para personas con discapacidad Auditiva.'
                    },
                    {
                        name: 'Pet-friendly',
                        icon: BugAntIcon,
                        iconForeground: 'text-rose-700',
                        iconBackground: 'bg-rose-50',
                        text: 'Este lugar es ideal para disfrutar con tu mascota.'
                    },
                    {
                        name: 'Genero',
                        icon: UserGroupIcon,
                        iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50',
                        text: 'Este lugar es para todas las personas, sin importar su género.'
                    },
                    {
                        name: 'Edad',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                    {
                        name: 'Emocional',
                        icon: HeartIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es ideal para disfrutar en familia, con amigos o en pareja.'
                    }
                ]
            },
            {
                id: 'zocalo-cdmx',
                name: 'Zócalo',
                description: 'El Zócalo es la plaza principal de la Ciudad de México y una de las más grandes del mundo. En ella se encuentran edificios históricos como la Catedral Metropolitana, el Palacio Nacional y el Antiguo Palacio del Ayuntamiento. Es un lugar emblemático de la ciudad y un punto de encuentro para los habitantes y visitantes de la capital mexicana.',
                image: 'https://a.cdn-hotels.com/gdcs/production135/d698/e31019f6-9bff-4442-a871-7fc42baeee4a.jpg',
                image2: 'https://a.cdn-hotels.com/gdcs/production135/d698/e31019f6-9bff-4442-a871-7fc42baeee4a.jpg',
                image3: 'https://a.cdn-hotels.com/gdcs/production135/d698/e31019f6-9bff-4442-a871-7fc42baeee4a.jpg',
                image4: 'https://a.cdn-hotels.com/gdcs/production135/d698/e31019f6-9bff-4442-a871-7fc42baeee4a.jpg',
                alt_image: 'Zócalo',
                shortDescription: 'El Zócalo es la plaza principal de la Ciudad de México y una de las más grandes del mundo.',
                prices: [
                    {
                        name:'libre acceso',
                        average: 0,
                    },
                    {

                    }
                ],
                reviews: 4,
                totalcount: 465,
                inclution: [
                    {
                        name: 'Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar no es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Visual',
                        icon: EyeIcon,
                        iconForeground: 'text-purple-700',
                        iconBackground: 'bg-purple-50',
                        text: 'Este lugar es ideal para personas con discapacidad Visual.'
                    },
                    {
                        name: 'Auditiva',
                        icon: SpeakerWaveIcon,
                        iconForeground: 'text-sky-700',
                        iconBackground: 'bg-sky-50',
                        text: 'Este lugar es ideal para personas con discapacidad Auditiva.'
                    },
                    {
                        name: 'Pet-friendly',
                        icon: BugAntIcon,
                        iconForeground: 'text-rose-700',
                        iconBackground: 'bg-rose-50',
                        text: 'Este lugar es ideal para disfrutar con tu mascota.'
                    },
                    {
                        name: 'Genero',
                        icon: UserGroupIcon,
                        iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50',
                        text: 'Este lugar es para todas las personas, sin importar su género.'
                    },
                    {
                        name: 'Edad',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                    {
                        name: 'Emocional',
                        icon: HeartIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es ideal para disfrutar en familia, con amigos o en pareja.'
                    }
                ]
            },
            {
                id: 'chapultepec',
                name: 'Chapultepec',
                description: 'El Bosque de Chapultepec es uno de los parques urbanos más grandes del mundo y uno de los más visitados en la Ciudad de México. En él se encuentran diversos atractivos turísticos como el Castillo de Chapultepec, el Museo de Historia Natural, el Museo de Arte Moderno, el Lago de Chapultepec, el Zoológico de Chapultepec, entre otros. Es un lugar ideal para disfrutar de la naturaleza, la cultura y la historia en medio de la ciudad.',
                image: 'https://mymodernmet.com/wp/wp-content/uploads/2020/05/Castillo-Chapultepec-4.jpg',
                image2: 'https://mymodernmet.com/wp/wp-content/uploads/2020/05/Castillo-Chapultepec-4.jpg',
                image3: 'https://mymodernmet.com/wp/wp-content/uploads/2020/05/Castillo-Chapultepec-4.jpg',
                image4: 'https://mymodernmet.com/wp/wp-content/uploads/2020/05/Castillo-Chapultepec-4.jpg',
                alt_image: 'Chapultepec',
                shortDescription: 'El Bosque de Chapultepec es uno de los parques urbanos más grandes del mundo y uno de los más visitados en la Ciudad de México.',
                prices: [
                    {
                        name:'libre acceso',
                        average: 0,
                    },
                    {

                    }
                ],
                reviews: 4,
                totalcount: 398,
                inclution: [
                    {
                        name: 'Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar no es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Visual',
                        icon: EyeIcon,
                        iconForeground: 'text-purple-700',
                        iconBackground: 'bg-purple-50',
                        text: 'Este lugar es ideal para personas con discapacidad Visual.'
                    },
                    {
                        name: 'Auditiva',
                        icon: SpeakerWaveIcon,
                        iconForeground: 'text-sky-700',
                        iconBackground: 'bg-sky-50',
                        text: 'Este lugar es ideal para personas con discapacidad Auditiva.'
                    },
                    {
                        name: 'Pet-friendly',
                        icon: BugAntIcon,
                        iconForeground: 'text-rose-700',
                        iconBackground: 'bg-rose-50',
                        text: 'Este lugar es ideal para disfrutar con tu mascota.'
                    },
                    {
                        name: 'Genero',
                        icon: UserGroupIcon,
                        iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50',
                        text: 'Este lugar es para todas las personas, sin importar su género.'
                    },
                    {
                        name: 'Edad',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                    {
                        name: 'Emocional',
                        icon: HeartIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es ideal para disfrutar en familia, con amigos o en pareja.'
                    }
                ]
            },
            {
                id: 'xochimilco',
                name: 'Xochimilco',
                description: 'Xochimilco es uno de los barrios más antiguos y pintorescos de la Ciudad de México y uno de los lugares más visitados por los turistas. Es conocido por sus canales, sus trajineras, sus chinampas y sus fiestas tradicionales. En Xochimilco se pueden disfrutar de paseos en trajinera, recorridos por los canales, visitas a los mercados y a los jardines botánicos, entre otras actividades. Es un lugar ideal para conocer la cultura y la tradición mexicana.',
                image: 'https://cdn.getyourguide.com/img/location/5776711238b1b.jpeg/88.jpg',
                image2: 'https://cdn2.uvnimg.com/17/d7/31afa1394caf9d534b9567b0761b/gettyimages-518604790.jpg',
                image3: 'https://cdn2.uvnimg.com/17/d7/31afa1394caf9d534b9567b0761b/gettyimages-518604790.jpg',
                image4: 'https://cdn2.uvnimg.com/17/d7/31afa1394caf9d534b9567b0761b/gettyimages-518604790.jpg',
                alt_image: 'Xochimilco',
                shortDescription: 'Xochimilco es uno de los barrios más antiguos y pintorescos de la Ciudad de México y uno de los lugares más visitados por los turistas.',
                prices: [
                    {
                        name:'libre acceso',
                        average: 0,
                    },
                    {

                    }
                ],
                reviews: 5,
                totalcount: 756,
                inclution: [
                    {
                        name: 'Física',
                        icon: FaceFrownIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar no es accesible para personas con discapacidad física.'
                    },
                    {
                        name: 'Visual',
                        icon: EyeIcon,
                        iconForeground: 'text-purple-700',
                        iconBackground: 'bg-purple-50',
                        text: 'Este lugar es ideal para personas con discapacidad Visual.'
                    },
                    {
                        name: 'Auditiva',
                        icon: SpeakerWaveIcon,
                        iconForeground: 'text-sky-700',
                        iconBackground: 'bg-sky-50',
                        text: 'Este lugar es ideal para personas con discapacidad Auditiva.'
                    },
                    {
                        name: 'Pet-friendly',
                        icon: BugAntIcon,
                        iconForeground: 'text-rose-700',
                        iconBackground: 'bg-rose-50',
                        text: 'Este lugar es ideal para disfrutar con tu mascota.'
                    },
                    {
                        name: 'Genero',
                        icon: UserGroupIcon,
                        iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50',
                        text: 'Este lugar es para todas las personas, sin importar su género.'
                    },
                    {
                        name: 'Edad',
                        icon: UserMinusIcon,
                        iconForeground: 'text-indigo-700',
                        iconBackground: 'bg-indigo-50',
                        text: 'Este lugar es para todas las Edades.'
                    },
                    {
                        name: 'Emocional',
                        icon: HeartIcon,
                        iconForeground: 'text-teal-700',
                        iconBackground: 'bg-teal-50',
                        text: 'Este lugar es ideal para disfrutar en familia, con amigos o en pareja.'
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