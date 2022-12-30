import "./styles.css"

export default function Template(){
    return(
        <div className="containerT">
        
        <main className="mainT">Main</main>
        <div class="sidebarT"> 
             <div className="class-word">Artigo</div>
             <div className="class-word">Substantivo</div>
             <div className="class-word">Adjetivo</div>
             <div className="class-word">Verbo</div>
             <div className="class-word">Adverbio</div>
             <div className="class-word">Pronome</div>
             <div className="class-word">Conjunção</div>
             <div className="class-word">Numeral</div>
             {/* <div className="class-word">Preposição</div>
             <div className="class-word">Interjeição</div> */}
        </div>
        <div class="content1T">Content1</div>
        <div class="content2T">Content2</div>
        <div class="content3T">Content3</div>
    <footer className="footerT">Footer</footer>
    </div>
    )
}