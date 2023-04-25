const miapp = Vue.createApp({
    data() {
      return {
        nombreGato:'',
        edadGato:'',
        gatos: [],
        modalText:false,
<<<<<<< HEAD
        modalGuardado:false,
        modalBorrado:false,
        indexModal:null,
        modalActivo:false,
        modalMessage:''
=======
        indexModal:null,
        modalActivo:false,
        modalMessage:'',
        modalClass:''
>>>>>>> main
      }
    },
    methods: {
      // href basico, convertir a componentes
      pagResult(){
        window.location.href="resultBoos.html"
      },
<<<<<<< HEAD
      guardarDatos() {
        if (this.nombreGato === "" || this.edadGato === "") {
          this.modalMessage="Por favor ingresa el nombre y edad de tu gato"
          this.modalText = true;
          // setTimeout(() => {
          //   this.modalText = false;
          // }, 3000);
=======
      mostrarModalText(clase,mensaje){
        this.modalClass=clase
        this.modalMessage=mensaje
        this.modalText = true
        setTimeout(() => {
          this.modalText = false
        }, 3000)
      },
      guardarDatos() {
        if (this.nombreGato === "" || this.edadGato === "") {
          this.mostrarModalText("btn-danger","Por favor ingresa el nombre y edad de tu gato")
          // this.modalClass="btn-danger"
          // this.modalMessage="Por favor ingresa el nombre y edad de tu gato"
          // this.modalText = true;
          
          
>>>>>>> main
        } else {
          let gatoExistente= this.gatos.find((gato)=>gato.nombre===this.nombreGato)
          if(gatoExistente){
            //si el gato existe lo actualizo
            gatoExistente.edad=this.edadGato
            localStorage.setItem("gatos", JSON.stringify(this.gatos))
            // alert(`Los datos de ${this.nombreGato} se han actualizado`)
<<<<<<< HEAD
            this.modalMessage=`Los datos de ${this.nombreGato} se han actualizado`
            this.modalGuardado = true;
=======
            this.mostrarModalText("btn-green",`Los datos de ${this.nombreGato} se han actualizado`)
            // this.modalClass="btn-green"
            // this.modalMessage=`Los datos de ${this.nombreGato} se han actualizado`
            // this.modalText = true;
>>>>>>> main
          }else{
            this.gatos.push({ nombre: this.nombreGato, edad: this.edadGato })
            localStorage.setItem("gatos", JSON.stringify(this.gatos))
            // alert(`El gato ${this.nombreGato} se ha registrado`)
<<<<<<< HEAD
            this.modalMessage=`El gato ${this.nombreGato} se ha registrado`
            this.modalGuardado = true;
=======
            this.mostrarModalText("btn-green",`El gato ${this.nombreGato} se ha registrado`)
            // this.modalClass="btn-green"
            // this.modalMessage=`El gato ${this.nombreGato} se ha registrado`
            // this.modalText = true;
>>>>>>> main
          }
          
          this.nombreGato = ""
          this.edadGato = ""
          this.mostrarGatos()
          // window.location.href = "resultBoos.html";
        }
        
       
      },
      mostrarGatos() {
        let gatosLocalStorage = localStorage.getItem('gatos');
        if (gatosLocalStorage !== null) {
        this.gatos = JSON.parse(gatosLocalStorage)
        }else{
          this.gatos = []
        }
      },
      // seleccionar gato para borrarlo?
      // seleccionarGato(index) {
      //   this.gatoSeleccionado = this.gatos[index];
      //   this.nombreGato = this.gatoSeleccionado.nombre;
      //   this.edadGato = this.gatoSeleccionado.edad;
      // },
      abrirModal(index) {
        this.indexModal = index
        this.modalActivo = true
      },
      cerrarModal() {
        this.modalActivo = false
        this.modalText = false
<<<<<<< HEAD
        this.modalBorrado=false
        this.modalGuardado=false
=======
        // this.modalBorrado=false
        // this.modalGuardado=false
>>>>>>> main
      },
      borrarGato(){
          const gatoEliminado = this.gatos[this.indexModal].nombre;
          // borra en la posicion indexModal, 1 item
          this.gatos.splice(this.indexModal,1)
          localStorage.setItem('gatos',JSON.stringify(this.gatos))
          this.cerrarModal()
<<<<<<< HEAD
          this.modalMessage=`El gato ${gatoEliminado} fue eliminado`
          this.modalBorrado = true;
=======
          this.mostrarModalText("btn-blue",`El gato ${gatoEliminado} fue eliminado`)
          // this.modalClass="btn-blue"
          // this.modalMessage=`El gato ${gatoEliminado} fue eliminado`
          // this.modalText = true;
>>>>>>> main
        
      }
    },
    mounted() {
      this.mostrarGatos();
    }
  })
  
  miapp.mount("#app")
  