/*
 * ABOUT........: Snippet Javascript implement OOP
 * CREADOR......: Jorge L. Torres A.
 * NOTA.........: Cambiar el nombre App por el nombre que se le de al objeto en javascript
 * METODO.......: Para implementar un nuevo método tomar como referencia código "App.prototype.NuevoMetodo"
 * ACTUALIZADO..: 02-05-2015 08:09PM
 * CREADO.......: 20-03-2015 11:53PM
 * ACTUALIZACION: Inclución de UI.Draggable, para poder mover elementos que tengas la clase css .dragme 
 */

(function (namespace) {
    //Constructor    
    function App() {
        this.Constructor();
    }
    //Variables Estaticas
    App.STARTTIME = new Date();
    //Variables Privadas
    var myVariable = App.prototype;
    var _Tracert = true;
    var _Result = null;
    var Evaluacion = App.prototype;

    //Metodos
    App.prototype.Constructor = function () {
        this.myVariable = null;
        
        var chks = document.querySelectorAll("input[type=checkbox]");
        for (var i = 0; i < chks.length; i++) {
            chks[i].onchange = this.Contar;
        }

        if (_Tracert) { console.log("App inicializado correctamente..." + this.Runtime(App.STARTTIME)); }
    };

    App.prototype.Contar = function () {
        this.Evaluacion = new Array(Preguntas.length);
        for (var i = 0; i < Preguntas.length; i++) {
            this.Evaluacion[i] = 0;
            var categoria = Preguntas[i];
            var chks = document.querySelectorAll("input[value='" + categoria.Categoria + "']");
            for (var o = 0; o < chks.length; o++) {
                if (chks[o].checked)
                    this.Evaluacion[i] = this.Evaluacion[i] === undefined ? 1 : this.Evaluacion[i] + 1;
            }
            this.Evaluacion[i] =( parseFloat(this.Evaluacion[i]) / categoria.Preguntas.length)*100;
        }
        var dataEvaluacion = this.Evaluacion;
        $(function () {

            $('#grafico').highcharts({

                chart: {
                    polar: true,
                    type: 'line'
                },

                title: {
                    text: 'Evaluación',
                    x: -80
                },

                pane: {
                    size: '80%'
                },

                xAxis: {
                    categories: Categorias,
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },

                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },

                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.2f}%</b><br/>'
                },

                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    y: 70,
                    layout: 'vertical'
                },

                series: [{
                    name: 'Resultado',
                    data: dataEvaluacion,
                    pointPlacement: 'on'
                }]

            });
        });
    }



    App.prototype.Runtime = function (starTime) {
        if (_Tracert) { console.log('metodo: "App.Runtime(starTime)" ha cargado exitosamente'); }
        return (((new Date() - starTime) / 1000).toFixed(2) + " segundos...");
    };



   Object.defineProperty(App.prototype, "Resultado", {
        get: function Resultado() {
            return _Result;
        }
    });
    Object.defineProperty(App.prototype, "Tracert", {
        get: function Tracert() {
            return _Tracert;
        },
        set: function Tracert(value) {
            _Tracert = value;
        }
    });

    /* Para Usar como plantilla para nuevos metodos, metodos obsoletos y/o propiedades 

         App.prototype.SUB_NAMESPACE = {
            METODO1: function () {
            },
            SUBCLASE: {
                METODO1: function () { },
                METODO2: function () { }
            }
        };

        App.prototype.NuevoMetodo = function (callback) {
            if (_Tracert) { console.log('metodo: "App.NuevoMetodo()" ha cargado exitosamente'); }
            var STARTTIME = new Date();
            var self = this;

            if (typeof callback === 'function') {
                callback();
            }

            if (_Tracert) { console.log('"App.NuevoMetodo()" realizado en ' + this.Runtime(STARTTIME)); }
        };

        //Marcar Método Obsoleto
        App.prototype.MetodoObsoleto = function () {
            var self = this;
            var e = "[deprecated] MetodoObsoleto está Obsoleto y será removido en futuras versiones. Usar el siguiente método NOMBRE_NUEVO_METODO";
            if (!this.NOMBRE_NUEVO_METODO) { throw (e); }
            (this.MetodoObsoleto = function () {
                console.log(e);
                self.NOMBRE_NUEVO_METODO();
            })();
        }
        Object.defineProperty(App.prototype, "Propiedad", {
            get: function Propiedad() {
                return myVariable;
            },
            set: function Propiedad(value) {
                unidad = myVariable;
            }
        });

    */
    namespace.App = App;
}(window.jt = window.jt || {}));

window.onload = function () {
    this.app = new jt.App();
}
