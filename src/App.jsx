import './App.css'
import { Player } from '@lottiefiles/react-lottie-player'

function App() {

    return (
        <div className='form'>
            <div className='info'>
                <div>
                    <img src="https://proxy.olhardigital.com.br/wp-content/uploads/2022/09/clooney-batman.jpg" className='foto' />
                </div>
                <div className='text'>
                    <h1> Olá, meu nome é ricardo</h1>
                    <p>Desenvolvedor back-end</p>
                    <p>Santa Catarina - SC</p>
                    <p>(48) 9 9109-2495</p>
                    <p>ricardozimmerjunior@gmail.com</p>
                    <a href='https://github.com/Ricardozj1'>https://github.com/Ricardozj1</a>
                </div>
            </div>
            <div>
                <h1>Projetos</h1>
                <p>Um API sobre Rick and Morty</p>
                <a href='https://rick-and-morty-seven-umber.vercel.app/'>https://rick-and-morty-seven-umber.vercel.app/</a>
            </div>
            <Player
                src="https://lottie.host/c404786e-2d84-4239-a092-5fa55366d5a7/DRPRrsgJH4.json" loop autoplay speed={5}
                style={{ height: "300px", width: "300px" }}
            />
        </div>
    )
}

export default App
