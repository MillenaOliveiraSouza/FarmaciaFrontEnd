import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';



function Home() {
    return (
        <>
        <div className="bg-yellow-500 flex justify-center">
          <div className='container grid grid-cols-2 text-red-600'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Tem Mais</h2>
              <p className='text-xl'>Sua saúde, nossa prioridade!</p>
  
              <div className="flex justify-around gap-4">
              <ModalProduto />
              <button className='rounded bg-red-600 hover:bg-red-800 text-white py-2 px-4'>Ver produtos</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaProdutos />
      </>
    );
}

export default Home;