import "./resume.scss";

class CvResume extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="content-title">
                <h2>Segmentaciones</h2>
                <p>Selecciona el área de tu interés y registra tu hoja de vida:</p>
            </div>

            <article class="Segments">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
                        <path d="M68.8748 23.5627H57.9998V19.9377C57.9998 17.0535 56.854 14.2874 54.8145 12.248C52.7751 10.2085 50.009 9.06274 47.1248 9.06274H39.8748C36.9905 9.06274 34.2244 10.2085 32.185 12.248C30.1455 14.2874 28.9998 17.0535 28.9998 19.9377V23.5627H18.1248C15.2405 23.5627 12.4744 24.7085 10.435 26.748C8.39551 28.7874 7.24976 31.5535 7.24976 34.4377V67.0627C7.24976 69.947 8.39551 72.7131 10.435 74.7525C12.4744 76.792 15.2405 77.9377 18.1248 77.9377H68.8748C71.759 77.9377 74.5251 76.792 76.5645 74.7525C78.604 72.7131 79.7498 69.947 79.7498 67.0627V34.4377C79.7498 31.5535 78.604 28.7874 76.5645 26.748C74.5251 24.7085 71.759 23.5627 68.8748 23.5627ZM36.2498 19.9377C36.2498 18.9763 36.6317 18.0543 37.3115 17.3745C37.9913 16.6947 38.9133 16.3127 39.8748 16.3127H47.1248C48.0862 16.3127 49.0082 16.6947 49.688 17.3745C50.3678 18.0543 50.7498 18.9763 50.7498 19.9377V23.5627H36.2498V19.9377ZM72.4998 67.0627C72.4998 68.0242 72.1178 68.9462 71.438 69.626C70.7582 70.3058 69.8362 70.6877 68.8748 70.6877H18.1248C17.1633 70.6877 16.2413 70.3058 15.5615 69.626C14.8817 68.9462 14.4998 68.0242 14.4998 67.0627V47.1252C18.0357 48.5278 21.6707 49.6667 25.3748 50.5327V52.6715C25.3748 53.6329 25.7567 54.5549 26.4365 55.2348C27.1163 55.9146 28.0383 56.2965 28.9998 56.2965C29.9612 56.2965 30.8832 55.9146 31.563 55.2348C32.2428 54.5549 32.6248 53.6329 32.6248 52.6715V51.9102C36.2293 52.401 39.862 52.6553 43.4998 52.6715C47.1375 52.6553 50.7702 52.401 54.3748 51.9102V52.6715C54.3748 53.6329 54.7567 54.5549 55.4365 55.2348C56.1163 55.9146 57.0383 56.2965 57.9998 56.2965C58.9612 56.2965 59.8832 55.9146 60.563 55.2348C61.2428 54.5549 61.6248 53.6329 61.6248 52.6715V50.5327C65.3288 49.6667 68.9638 48.5278 72.4998 47.1252V67.0627ZM72.4998 39.1865C68.9741 40.6745 65.3381 41.8865 61.6248 42.8115V41.6877C61.6248 40.7263 61.2428 39.8043 60.563 39.1245C59.8832 38.4447 58.9612 38.0627 57.9998 38.0627C57.0383 38.0627 56.1163 38.4447 55.4365 39.1245C54.7567 39.8043 54.3748 40.7263 54.3748 41.6877V44.3702C47.1655 45.4579 39.834 45.4579 32.6248 44.3702V41.6877C32.6248 40.7263 32.2428 39.8043 31.563 39.1245C30.8832 38.4447 29.9612 38.0627 28.9998 38.0627C28.0383 38.0627 27.1163 38.4447 26.4365 39.1245C25.7567 39.8043 25.3748 40.7263 25.3748 41.6877V42.884C21.6614 41.959 18.0254 40.747 14.4998 39.259V34.4377C14.4998 33.4763 14.8817 32.5543 15.5615 31.8745C16.2413 31.1947 17.1633 30.8127 18.1248 30.8127H68.8748C69.8362 30.8127 70.7582 31.1947 71.438 31.8745C72.1178 32.5543 72.4998 33.4763 72.4998 34.4377V39.1865Z" fill="#5F259F"/>
                    </svg>
                </figure>
                <div class="Segments-info">
                    <h2>Comercial</h2>
                    <p>Buscamos personas dinámicas, con gran habilidad comercial e interés en comprometerse con nuestros clients y sus necesidades de emprendimiento. Profesionales con integridad, que asesoren a nuestros clientes y clientas, conozcan sus hogares, sus negocios y su productividad.</p>
                </div>
            </article>
            <article class="Segments">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
                        <path d="M44.5873 44.2977C46.5215 42.6235 48.0729 40.5527 49.1362 38.226C50.1995 35.8992 50.7498 33.3709 50.7498 30.8127C50.7498 26.0057 48.8402 21.3955 45.4411 17.9964C42.042 14.5973 37.4318 12.6877 32.6248 12.6877C27.8177 12.6877 23.2075 14.5973 19.8084 17.9964C16.4093 21.3955 14.4998 26.0057 14.4998 30.8127C14.4997 33.3709 15.05 35.8992 16.1133 38.226C17.1766 40.5527 18.728 42.6235 20.6623 44.2977C15.5878 46.5956 11.2824 50.3063 8.26106 54.9862C5.23968 59.6661 3.63009 65.1172 3.62476 70.6877C3.62476 71.6492 4.00667 72.5712 4.68649 73.251C5.36631 73.9308 6.28835 74.3127 7.24976 74.3127C8.21117 74.3127 9.1332 73.9308 9.81302 73.251C10.4928 72.5712 10.8748 71.6492 10.8748 70.6877C10.8748 64.9193 13.1663 59.3871 17.2452 55.3082C21.3241 51.2293 26.8563 48.9377 32.6248 48.9377C38.3932 48.9377 43.9254 51.2293 48.0043 55.3082C52.0832 59.3871 54.3748 64.9193 54.3748 70.6877C54.3748 71.6492 54.7567 72.5712 55.4365 73.251C56.1163 73.9308 57.0383 74.3127 57.9998 74.3127C58.9612 74.3127 59.8832 73.9308 60.563 73.251C61.2428 72.5712 61.6248 71.6492 61.6248 70.6877C61.6194 65.1172 60.0098 59.6661 56.9885 54.9862C53.9671 50.3063 49.6618 46.5956 44.5873 44.2977ZM32.6248 41.6877C30.4739 41.6877 28.3713 41.0499 26.5829 39.855C24.7945 38.66 23.4007 36.9616 22.5776 34.9744C21.7545 32.9873 21.5391 30.8007 21.9587 28.6911C22.3783 26.5816 23.4141 24.6439 24.935 23.123C26.4559 21.6021 28.3936 20.5663 30.5032 20.1467C32.6127 19.7271 34.7993 19.9425 36.7864 20.7656C38.7736 21.5887 40.472 22.9825 41.667 24.7709C42.8619 26.5593 43.4998 28.6619 43.4998 30.8127C43.4998 33.697 42.354 36.4631 40.3145 38.5025C38.2751 40.542 35.509 41.6877 32.6248 41.6877ZM67.9323 42.8477C70.2521 40.2353 71.7675 37.0081 72.296 33.5545C72.8245 30.1009 72.3436 26.5681 70.9112 23.3815C69.4787 20.1949 67.1558 17.4901 64.222 15.5929C61.2882 13.6957 57.8686 12.6868 54.3748 12.6877C53.4133 12.6877 52.4913 13.0697 51.8115 13.7495C51.1317 14.4293 50.7498 15.3513 50.7498 16.3127C50.7498 17.2742 51.1317 18.1962 51.8115 18.876C52.4913 19.5558 53.4133 19.9377 54.3748 19.9377C57.259 19.9377 60.0251 21.0835 62.0645 23.123C64.104 25.1624 65.2498 27.9285 65.2498 30.8127C65.2446 32.7167 64.7397 34.586 63.7855 36.2336C62.8313 37.8813 61.4612 39.2495 59.8123 40.2015C59.2748 40.5115 58.8259 40.9543 58.5086 41.4874C58.1912 42.0206 58.016 42.6263 57.9998 43.2465C57.9846 43.8619 58.1264 44.471 58.4118 45.0164C58.6972 45.5619 59.1168 46.0256 59.631 46.364L61.0448 47.3065L61.516 47.5602C65.8856 49.6327 69.5719 52.9107 72.1408 57.0081C74.7097 61.1056 76.0542 65.8518 76.016 70.6877C76.016 71.6492 76.3979 72.5712 77.0778 73.251C77.7576 73.9308 78.6796 74.3127 79.641 74.3127C80.6024 74.3127 81.5245 73.9308 82.2043 73.251C82.8841 72.5712 83.266 71.6492 83.266 70.6877C83.2956 65.1249 81.9024 59.6469 79.2186 54.7742C76.5348 49.9015 72.6496 45.796 67.9323 42.8477Z" fill="#5F259F"/>
                    </svg>
                </figure>
                <div class="Segments-info">
                    <h2>Operativo</h2>
                    <p>Buscamos personas alegres, cordiales y dispuestas al servicio, para manejar el contacto directo con nuestros clientes y clientas. Nuestro objetivo es construir un equipo humano especializado en brindar el mejor servicio, desde nuestras oficinas</p>
                </div>
            </article>
            <article class="Segments">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
                        <path d="M68.8748 23.5627H57.9998V19.9377C57.9998 17.0535 56.854 14.2874 54.8145 12.248C52.7751 10.2085 50.009 9.06274 47.1248 9.06274H39.8748C36.9905 9.06274 34.2244 10.2085 32.185 12.248C30.1455 14.2874 28.9998 17.0535 28.9998 19.9377V23.5627H18.1248C15.2405 23.5627 12.4744 24.7085 10.435 26.748C8.39551 28.7874 7.24976 31.5535 7.24976 34.4377V67.0627C7.24976 69.947 8.39551 72.7131 10.435 74.7525C12.4744 76.792 15.2405 77.9377 18.1248 77.9377H68.8748C71.759 77.9377 74.5251 76.792 76.5645 74.7525C78.604 72.7131 79.7498 69.947 79.7498 67.0627V34.4377C79.7498 31.5535 78.604 28.7874 76.5645 26.748C74.5251 24.7085 71.759 23.5627 68.8748 23.5627ZM36.2498 19.9377C36.2498 18.9763 36.6317 18.0543 37.3115 17.3745C37.9913 16.6947 38.9133 16.3127 39.8748 16.3127H47.1248C48.0862 16.3127 49.0082 16.6947 49.688 17.3745C50.3678 18.0543 50.7498 18.9763 50.7498 19.9377V23.5627H36.2498V19.9377ZM72.4998 67.0627C72.4998 68.0242 72.1178 68.9462 71.438 69.626C70.7582 70.3058 69.8362 70.6877 68.8748 70.6877H18.1248C17.1633 70.6877 16.2413 70.3058 15.5615 69.626C14.8817 68.9462 14.4998 68.0242 14.4998 67.0627V47.1252C18.0357 48.5278 21.6707 49.6667 25.3748 50.5327V52.6715C25.3748 53.6329 25.7567 54.5549 26.4365 55.2348C27.1163 55.9146 28.0383 56.2965 28.9998 56.2965C29.9612 56.2965 30.8832 55.9146 31.563 55.2348C32.2428 54.5549 32.6248 53.6329 32.6248 52.6715V51.9102C36.2293 52.401 39.862 52.6553 43.4998 52.6715C47.1375 52.6553 50.7702 52.401 54.3748 51.9102V52.6715C54.3748 53.6329 54.7567 54.5549 55.4365 55.2348C56.1163 55.9146 57.0383 56.2965 57.9998 56.2965C58.9612 56.2965 59.8832 55.9146 60.563 55.2348C61.2428 54.5549 61.6248 53.6329 61.6248 52.6715V50.5327C65.3288 49.6667 68.9638 48.5278 72.4998 47.1252V67.0627ZM72.4998 39.1865C68.9741 40.6745 65.3381 41.8865 61.6248 42.8115V41.6877C61.6248 40.7263 61.2428 39.8043 60.563 39.1245C59.8832 38.4447 58.9612 38.0627 57.9998 38.0627C57.0383 38.0627 56.1163 38.4447 55.4365 39.1245C54.7567 39.8043 54.3748 40.7263 54.3748 41.6877V44.3702C47.1655 45.4579 39.834 45.4579 32.6248 44.3702V41.6877C32.6248 40.7263 32.2428 39.8043 31.563 39.1245C30.8832 38.4447 29.9612 38.0627 28.9998 38.0627C28.0383 38.0627 27.1163 38.4447 26.4365 39.1245C25.7567 39.8043 25.3748 40.7263 25.3748 41.6877V42.884C21.6614 41.959 18.0254 40.747 14.4998 39.259V34.4377C14.4998 33.4763 14.8817 32.5543 15.5615 31.8745C16.2413 31.1947 17.1633 30.8127 18.1248 30.8127H68.8748C69.8362 30.8127 70.7582 31.1947 71.438 31.8745C72.1178 32.5543 72.4998 33.4763 72.4998 34.4377V39.1865Z" fill="#5F259F"/>
                    </svg>
                </figure>
                <div class="Segments-info">
                    <h2>Administrativo</h2>
                    <p>Buscamos profesionales que se sumen al posicionamiento y expansión como Banco. Personas apasionadas por la estrategia financiera y administrativa de la organización; orientadas a enfocar su talento y gestión para alcanzar las metas y objetivos del Banco W.</p>
                </div>
            </article>

            
        <div class="last-button">
            <a href="">Enviar hoja de vida</a>
        </div>
    `
    }
}

customElements.define('cv-resume', CvResume)