import React,{useEffect,useState} from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'

const baseUrl = 'http://localhost:8083/api/v1/fabricantes'

const FabricanteTable = () => {

    const[fabricantes,setFabricantes]=useState([])
    const[search,setSearch]=useState('')
    const[filteredFabricantes,setFilteredFabricantes]=useState([])

    const obtenerFabricantes=async()=>{
        try {
            const response=await axios.get(baseUrl)
            setFabricantes(response.data.fabricanteResponse.fabricantes)
        }catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        const resul = fabricantes.filter((fabricante) => {
            return fabricante.nombre.toLowerCase().match(search.toLowerCase());
        });
        setFilteredFabricantes(resul);
        },[search,fabricantes])



    useEffect(()=>{
        obtenerFabricantes()
    },[])

    //definir las columnas DataTable
    const columns=[
        {
            name:'Id',
            selector: row => row.id,
            sortable:true
        },
        {
            name:'Nombre',
            selector: row => row.nombre,
            sortable:true
        },
        {
            name: 'Acciones',
            cell: row =>(
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-warning'>Editar</button>
                    <button className='btn btn-danger ms-2' >Eliminar</button>
                </div>
            )
        }

    ]

  return (
    <div>
        <h3 className='text-center'>Muestra Listado de Fabricante</h3>
         <div className='d-flex justify-content-end'>
            <button className='btn btn-primary'> Agregar </button>
         </div>

        <DataTable
            columns={columns}
            data={filteredFabricantes}
            pagination
            paginationComponentOptions={{rowsPerPageText:'Filas por pagina',rangeSeparatorText:'de'}}
            fixedHeader
            fixedHeaderScrollHeight='600px'
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input
                    type='text'
                    placeholder='Buscar Fabricante'
                    className='w-25 form-control'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}

                    />
                    
            }
        
        />
      
    </div>
  )
}

export default FabricanteTable
