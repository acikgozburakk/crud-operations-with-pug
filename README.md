# crud-operations-with-pug

-----Used technologies-----
*Vue
*Vuex
*Bootstrap
*Axios
*Pug



const data [
    {
    id:1,
    name:'user 1'
    },
    {
    id:2,
    name:'user 2'
    },
    {
    id:3,
    name:'user 3'
    },
    {
    id:4,
    name:'user 4'
    },
    {
    id:5,
    name:'user 5'
    },
]

const filterData = data.flatMap((item,index)  => index !==2 ? item.name : [] )

// filterData: ['user 1', 'user 2', 'user 4', 'user 5'] 

