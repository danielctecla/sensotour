const states = [
    {
        id: '',
        name:'No State Selected'
    },
    {
        id: 'estado-de-mexico',
        name: 'Estado de México',
    },
    {
        id: 'yucatan',
        name: 'Yucatán',
    },
    {
        id: 'quinatana-roo',
        name: 'Quintana Roo',
    },
    {
        id: 'campeche',
        name: 'Campeche',
    },
    {
        id: 'tabasco',
        name: 'Tabasco',
    },
    {
        id: 'chiapas',
        name: 'Chiapas',
    },
    {
        id: 'veracruz',
        name: 'Veracruz',
    },
    {
        id: 'oaxaca',
        name: 'Oaxaca',
    },
    {
        id: 'puebla',
        name: 'Puebla',
    },
    {
        id: 'guerrero',
        name: 'Guerrero',
    },
    {
        id: 'morelos',
        name: 'Morelos',
    },
    {
        id: 'nuevo-leon',
        name: 'Nuevo León',
    },
    {
        id: 'jalisco',
        name: 'Jalisco',
    },
    {
        id: 'sinaloa',
        name: 'Sinaloa',
    },
    {
        id: 'sonora',
        name: 'Sonora',
    },
    {
        id: 'baja-california',
        name: 'Baja California',
    },
    {
        id: 'baja-california-sur',
        name: 'Baja California Sur',
    },
    {
        id: 'chihuahua',
        name: 'Chihuahua',
    },
    {
        id: 'coahuila',
        name: 'Coahuila',
    },
    {
        id: 'durango',
        name: 'Durango',
    },
    {
        id: 'zacatecas',
        name: 'Zacatecas',
    },
    {
        id: 'aguascalientes',
        name: 'Aguascalientes',
    },
    {
        id: 'san-luis-potosi',
        name: 'San Luis Potosí',
    },
    {
        id: 'nayarit',
        name: 'Nayarit',
    },
    {
        id: 'colima',
        name: 'Colima',
    },
    {
        id: 'guanajuato',
        name: 'Guanajuato',
    },
    {
        id: 'queretaro',
        name: 'Querétaro',
    },
    {
        id: 'hidalgo',
        name: 'Hidalgo',
    },
    {
        id: 'tlaxcala',
        name: 'Tlaxcala',
    },
    {
        id: 'ciudad-de-mexico',
        name: 'Ciudad de Mexico',
    },
    {
        id: 'puebla',
        name: 'Puebla',
    },
    {
        id: 'tlaxcala',
        name: 'Tlaxcala',
    },
    {
        id: 'tamaulipas',
        name: 'Tamaulipas',
    }
]

export function getIdByName(name) {
    return states.find(state => state.name === name).id
}

export function getNameById(id) {
    return states.find(state => state.id === id).name
}