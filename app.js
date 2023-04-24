const miapp = Vue.createApp({
    data() {
      return {
        nombreGato:'',
        edadGato:'',
        gatos: [],
        modalText:false,
        indexModal:null,
        modalActivo:false
      }
    },
    methods: {
      // href basico, convertir a componentes
      pagResult(){
        window.location.href="resultBoos.html"
      },
      guardarDatos() {
        if (this.nombreGato === "" || this.edadGato === "") {
          this.modalText = true;
        // setTimeout(() => {
        //   this.modalText = false;
        // }, 9000);
        } else {
          let gatoExistente= this.gatos.find((gato)=>gato.nombre===this.nombreGato)
          if(gatoExistente){
            //si el gato existe lo actualizo
            gatoExistente.edad=this.edadGato
            localStorage.setItem("gatos", JSON.stringify(this.gatos))
            alert(`Los datos de ${this.nombreGato} se han actualizado`)
          }else{
            this.gatos.push({ nombre: this.nombreGato, edad: this.edadGato })
            localStorage.setItem("gatos", JSON.stringify(this.gatos))
            alert(`El gato ${this.nombreGato} se ha registrado`)
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
      },
      borrarGato(){
          // borra en la posicion indexModal, 1 item
          this.gatos.splice(this.indexModal,1)
          localStorage.setItem('gatos',JSON.stringify(this.gatos))
          this.cerrarModal()
        
      }
    },
    mounted() {
      this.mostrarGatos();
    }
  })
  
  miapp.mount("#app")
  