-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2019 a las 22:16:47
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `primerparciallabo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actores`
--

CREATE TABLE `actores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `nacionalidad` varchar(100) NOT NULL,
  `fecha_nacimiento` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `actores`
--

INSERT INTO `actores` (`id`, `nombre`, `apellido`, `nacionalidad`, `fecha_nacimiento`) VALUES
(1, 'actuno', 'apeuno', 'argentina', '10-10-1990'),
(2, 'actordos', 'apedos', 'español', '1993-01-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estrellas`
--

CREATE TABLE `estrellas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `nacionalidad` varchar(100) NOT NULL,
  `fecha_nacimiento` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estrellas`
--

INSERT INTO `estrellas` (`id`, `nombre`, `apellido`, `nacionalidad`, `fecha_nacimiento`) VALUES
(1, 'nombreuno', 'apeuno', 'argentina', '10-10-1990');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `fecha_estreno` varchar(100) NOT NULL,
  `cant_publico` int(11) NOT NULL,
  `foto` varchar(200) DEFAULT NULL,
  `actor_principal` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `nombre`, `tipo`, `fecha_estreno`, `cant_publico`, `foto`, `actor_principal`) VALUES
(1, 'titanic', 'amor', '10-10-1980', 100, NULL, NULL),
(2, 'A star is born', 'amor', '10-01-2019', 200, NULL, NULL),
(4, 'prueba3', 'otros', '2019-01-01', 200, NULL, NULL),
(5, 'pelicula5', 'otros', '2019-01-31', 300, NULL, NULL),
(6, 'pelconestuno', 'amor', '10-10-1990', 200, NULL, 'actuno'),
(7, 'peliconestdos', 'amor', '2019-01-01', 1000, NULL, 'estdos'),
(8, 'pelconesttres', 'amor', '10-10-1990', 200, 'sin foto', 'acttres'),
(9, 'peliculaunoim', 'amor', '10-10-1990', 2000, 'sin foto', 'actcuatro'),
(10, 'peliculaunoim2', 'amor', '10-10-1990', 2000, 'sin foto', 'actcuatro'),
(11, 'peliculaunoim26', 'amor', '10-10-1990', 2000, 'sin foto', 'actcuatro'),
(12, 'peliculaunoim29', 'amor', '10-10-1990', 2000, 'sin foto', 'actcuatro');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estrellas`
--
ALTER TABLE `estrellas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actores`
--
ALTER TABLE `actores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `estrellas`
--
ALTER TABLE `estrellas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
