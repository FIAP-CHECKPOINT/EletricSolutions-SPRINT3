
import {} from 'react'

function Material() {
  

  return (
    <>
      <div className='container'>
        <div className='estmat'>

          <h1>Nossos Materias</h1>

          <div className='materiais'>

            <div className='textmat'>
              <p>Os painéis solares funcionam com base no fator fotovoltaico, onde a luz</p>
              <p>solar é absorvida no painel fotovoltaico e transformada em energia elétrica.</p>
              <p>Com esse fator em pauta, é possível observar que a energia criada é uma fonte</p> 
              <p>sustentável pois não agride de nenhuma forma o meio ambiente e utiliza </p>
              <p>somente de semicondutores compostos de silício para poder funcionar.</p>
            </div>

              
            <div className='urban'>
              <h1>Nossos equipamentos instalados no meio urbano</h1>
              <img src="https://neofeed.com.br/wp-content/uploads/2023/06/Painel_TelhadoVF.jpg" alt="imagem solar cidade" />
            </div>

            <div className='agrarian'>
              <h1>Nossas instalações no meio rural</h1>
              <img src="https://aquakent.com.br/blog/wp-content/uploads/2022/08/como-feito-painel-solar.jpg" alt="imagem solar rural" />
            </div>
          </div>

        </div>

        <div className='estquali'>
            <h1>Qualidade Eletric Solution</h1>

            <div className='quality'>

              <div className='textquali'>
                <p>A Empresa Eletric Solutions é reconhecida por sua excelência na utilização de materiais</p> 
                <p>de altíssima qualidade em todos os seus projetos. Nossa marca é sinônimo de durabilidade</p>
                <p>e resistência, com um compromisso inabalável em entregar soluções que resistam aos mais</p> 
                <p>desafiadores eventos naturais. Além disso, estamos orgulhosos de afirmar que nossa abordagem</p> 
                <p>é completamente sustentável, adotando práticas e materiais ecologicamente responsáveis em</p> 
                <p>todos os aspectos de nossa operação. Dessa forma, não apenas garantimos a satisfação de</p> 
                <p>nossos clientes com produtos robustos e confiáveis, mas também contribuímos para a preservação</p> 
                <p>do meio ambiente, promovendo um futuro mais verde e sustentável para todos.</p>
              </div>



              <img src="https://midias.agazeta.com.br/2023/03/24/energia-solar-1444783.jpeg" alt="imagem material" />
              
            </div>
        </div>

      </div>
    </>
  )
}

export default Material