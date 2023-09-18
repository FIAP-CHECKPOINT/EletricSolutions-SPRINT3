
import { useState } from 'react'

function Solucao() {
  
  const[lista, setLista]= useState([]);
  const adicionarLista =()=>setLista([...lista, Math.random(10).toFixed(2)]);

  return (
    <>
      <div className='container'>

        <div className='estsol'>

          <div className='solucaoh1'>
            <h1>Solução Apresentada Por Nós</h1>
          </div>

          <div className='solucao'>
            <p>Durante alguns períodos do ano existe e sempre existiu falta de energia</p> 
            <p>devido as secas nas hidrelétricas, com isto alguns lugares ficam sem luz</p> 
            <p>por grandes períodos como em 2018 que mais de 14 cidades brasileiras ficaram sem luz e energia.</p>
            <p>Pensando nisso, a Electric Solutions investiu em uma proposta inovadora</p>
            <p>baseado em tecnologia de primeira linha, e assim surgiu a ideia da</p>
            <p>nossa árvore solar, que terá a habilidade de fornecer energia em</p> 
            <p>lugares afastados e em áreas de lazer.</p>
          </div>

          <div className='tree'>
            <img src="src\images\arvore.png" alt="imagem arvore" />

            <div className='texttree'> 
              <p>A Árvore Solar é um produto inovador que combina a energia solar com</p> 
              <p>a beleza da natureza. Essa árvore artificial é equipada com painéis</p> 
              <p>solares que captam a luz do sol durante o dia e a convertem em energia elétrica.</p>
            </div>

            <fieldset className='campoMap'>
              <legend>Listagem</legend>
                <ul>
                  {lista.map((n,i)=><li key={i}>{n}</li>)}
                  <button onClick={adicionarLista}>Adicionar Listagem</button>
                </ul>
            </fieldset>


          </div>
        </div>

      </div>
    </>
  )
}

export default Solucao