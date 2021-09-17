import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/-cae3CkjriBo/YOB_lfl6VUI/AAAAAAAAABI/nONWFi5HuHoGnknMDZ2yVvmLUbjrWXp2gCEwYBhgLKtQDABHVOhyVswHqeRDugwzuXO-atjDhcfzmYDyCR8ve84TA1WCG_B881tqKlEY_xUo_AtgAw3O1cmN4Wmvu5noNcY0u-aKfM1VreXqeyuSbxRxnbNs7YBaeEAnZrTZWmrzn5gxUKi7lGYJ17sdowIdEVTjlWqO0twbYiL2y9xd4An9ka-pRkl81iwuvRTuwKT41_oBmD-QP4ebnDMgYtj7JEVwV7wOiHEDJIXDgqfZ0--xgYsugofH6-Q7nwh-0a50jAamRVCezpf0757s4o5Fyye4hf4JOtNVMH8sVeRb9iegmI0H2hPVvKoFIOKJRpQ1GeFbNx9c-J6w-R82Q_X6R70aWIXTl66AXd6GYeSHjRkXU48c_iUeU81EkJ5Z3hJwXQwhzdLtVgLxEFMC95EWnwkBD2ZURfBMoYMwaT-Pm5rLXRfWwwA3oje4KDaig2fX4b2hc5SmhzZivfpclGVhwkGrkwkxexQxjbk4NSsdvYDkrpOpN2eoK9zp1wffvK_VMsZrV9Cd-Po4wR2I1bVhF1ksMrviLrEDEqQwIzUDqDI2DXabxqWODPHe_NroJ3UqTYrS58sfnkmfFh0XH4hlKhQX2ZP3gZ6LifDZ7vPcLU137RYPVMJjx74kG/w140-h140-p/2021-07-03.png"
          nome="Flávio Filho" 
          descricao="Oi, eu sou o Flávio. Sou professor e apaixonado por tecnologia."
        />
              
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png"
          texto= "Email:flavio@email.com"
        />

      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://i.pinimg.com/originals/f0/c7/b9/f0c7b9489446715cae72085a470f0ed9.jpg"
          texto="Endereço:Nova Morada"
        />

      </div>
    
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://w7.pngwing.com/pngs/551/211/png-transparent-education-logo-pre-school-others-text-logo-business.png" 
          nome="PROFESSOR DA REDE ESTADUAL" 
          descricao="Professor de ensino fundamental e médio na Rede Estadual de Educação da Bahia." 
        />
        
        <CardGrande 
          imagem="https://w7.pngwing.com/pngs/742/538/png-transparent-school-building-logo-web-page-blue-building-text.png" 
          nome="PROFESSOR DA REDE PARTICULAR" 
          descricao="Professor de ensino fundamental na rede particular de ensino." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
