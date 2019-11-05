NOMBRE: CRISTIAN BOGDAN BAGHIU, MIGUEL ANGEL MATEO CASALI, MARIA DE LOS ANGELES RODRIGUEZ SANCHEZ
GRUPO: TECINF
DESCRIPCIÓN: El principal objetivo de la aplicación del grupo TECINF es monitorizar la línea de producción de una fábrica mediante el uso de la tecnología IoT.
Para ello se usará la plataforma abierta Fiware, en la cual se subirán los datos de monitorización de dicha línea de producción. Esta línea de producción
tiene los siguientes procesos:  Corte, Lijado y Chapado. En cada proceso tiene instalado cuatro sensores que enváin datos cada 5 minutos a FIWARE.
Esos datos enviados por los sensores se analizan en la aplicación y se muestra al usuario de la fábrica con forma de semáforo (color rojo=estado error, color verde = estado ok).
Esta aplicación también muestra la temperatura/humedad/sensación térmica de la línea de producción y de otras zonas de la fábrica.
La idea es que esta aplicación sirva como panel de control para la fábrica y que sea intuitiva y que en un vistazo puedas saber el estado de los procesos principales de la fábrica.
Para usar la plataforma abierta Fiware se ha usado a través de Fiware/Orion del componente Enabler VFOS http://gui.vfos.uninova.pt.
Se ha tenido que crear una instancia para nuestro grupo (tecinf) y entidades para los sensores. Luego la aplicación consume los valores de esas entidades/sensores.


