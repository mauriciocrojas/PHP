<?php

require_once "Ejercicio17-Auto.php";

// En testAuto.php:
// ● Crear dos objetos “Auto” de la misma marca y distinto color.
// ● Crear dos objetos “Auto” de la misma marca, mismo color y distinto precio.
// ● Crear un objeto “Auto” utilizando la sobrecarga restante.
// ● Utilizar el método “AgregarImpuesto” en los últimos tres objetos, agregando $ 1500
// al atributo precio.
// ● Obtener el importe sumado del primer objeto “Auto” más el segundo y mostrar el
// resultado obtenido.
// ● Comparar el primer “Auto” con el segundo y quinto objeto e informar si son iguales o
// no.
// ● Utilizar el método de clase “MostrarAuto” para mostrar cada los objetos impares (1, 3, 5)

$auto1 = new Auto ("Ford", "Negro", 5000, "12/05/2020");
$auto2 = new Auto ("Chevrolet", "Gris", 7000);
$auto3 = new Auto ("Chevrolet", "Amarillo", 9000);
$auto4 = new Auto ("Honda", "Dorado");

echo "<b>Auto 1:</b><br>". Auto::MostrarAuto($auto1);
echo "<b>Auto 2:</b><br>". Auto::MostrarAuto($auto2);
echo "<b>Auto 3:</b><br>". Auto::MostrarAuto($auto3);
echo "<b>Auto 4:</b><br>". Auto::MostrarAuto($auto4);

echo "<b>Comparo la marca del Auto 1 y 2: </b><br>". $auto1->Equals($auto1, $auto2);
echo "<b>Comparo la marca del Auto 2 y 3: </b><br>".$auto1->Equals($auto2, $auto3);


?>