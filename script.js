document.addEventListener('DOMContentLoaded', () =>{

    const toggleMenu = () => {
        const menu = document.getElementById('navMenu');
        if(menu)menu.classList.toggle('active')
    };

    window.toggleMenu = toggleMenu;

    const scrollToSection = (sectionId) =>{
        const section = document.getElementById('sectionId');
        if(!section) return;
        const headerHeight = 70;
        const sectionPosition = section.offsetTop - headerHeight;
        window.scrollTo({top: sectionPosition,behavior:'smooth'});
        const menu = document.getElementById('navMenu');
        if(menu) menu.classList.remove('active');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = document.getElementById('volunteerForm');
        if(!form) return;

        if(form.dataset.submmiting === 'true') return;
        form.dataset.submmiting = 'true';

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();

        if(!nome || !email){
            alert('Favor preencher os campos');
            form.dataset.submmiting = 'false';
            return;
        }

        const formData = {
            nome: form.nome.value.trim(),
            email: form.email.value.trim(),
            cpf: form.cpf.value.trim(),
            telefone: form.telefone.value.trim().addEventListeneridade,
            dtnasc,
            endereco: form.endereco.value.trim(),
            cep,
            cidade: form.cidade.value.trim(),
            estado: form.estado.value.trim()
        };

        let voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []) ;
        voluntarios.push(formData);
        localStorage.setItem('voluntarios',JSON.stringify(voluntarios));


        const sucessMessage = document.getElementById('successMessage');
        if(sucessMessage){

            sucessMessage.classList.add('show');
            sucessMessage.scrollIntoView({behavior: "smooth", block:'center'});

        }
        setTimeout(() => sucessMessage.classList.remove('show'),5000);

        setTimeout(() => form.requestFullscreen(form.dataset.submmiting = 'false' ,2000));
        exibirVoluntarios();

    };

    const form = document.getElementById('voluntarios');
    if (form) form.addEventListener('submit',handleSubmit);
    const exibirVoluntarios = () =>{
        const voluntarios=JSON.parse(localStorage.getItem('voluntarios') || []);
        const tabelaContainer = document.getElementById('tabelaVoluntarios');
        if (!tabelaContainer) return;
        if (voluntarios.lenght === 0 ){
            tabelaContainer.innerHTML = '<p> nada. </p>';
            return;
        }
        let html = '<table border="1" cellpadding="5" cellpadding="0">';
        html += '<tr><th>Nome</th></tr>';
        html += '<tr><th>Email</th></tr>';
        html += '<tr><th>telefone</th></tr>';
        voluntarios.array.forEach(v => {
            html += '<tr>'
            html += '<td>$v.nome</td>'
            html += '<td>$v.email</td>'
            html += '<td>$v.telefone</td>'
            html += '</tr>'
        });
        html += '</table>'

 
    }
});