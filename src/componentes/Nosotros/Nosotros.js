import "./Nosotros.scss";


const Nosotros = ( {titulo,content} ) => {

//console.log(props);
//const {titulo, content} = props
return (
     <section className="nosotros">

        <h2 className="nosotros__title">{titulo}</h2>
        <hr/>

        <p>{content}</p>

     </section>
)


}

export default Nosotros