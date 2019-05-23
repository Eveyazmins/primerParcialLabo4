-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2019 at 10:28 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `primerparciallabo`
--

-- --------------------------------------------------------

--
-- Table structure for table `actores`
--

CREATE TABLE `actores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `nacionalidad` varchar(100) NOT NULL,
  `fecha_nacimiento` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actores`
--

INSERT INTO `actores` (`id`, `nombre`, `apellido`, `nacionalidad`, `fecha_nacimiento`) VALUES
(1, 'actuno', 'apeuno', 'argentina', '10-10-1990'),
(2, 'actordos', 'apedos', 'español', '1993-01-01');

-- --------------------------------------------------------

--
-- Table structure for table `estrellas`
--

CREATE TABLE `estrellas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `nacionalidad` varchar(100) NOT NULL,
  `fecha_nacimiento` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `estrellas`
--

INSERT INTO `estrellas` (`id`, `nombre`, `apellido`, `nacionalidad`, `fecha_nacimiento`) VALUES
(1, 'nombreuno', 'apeuno', 'argentina', '10-10-1990');

-- --------------------------------------------------------

--
-- Table structure for table `peliculas`
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
-- Dumping data for table `peliculas`
--

INSERT INTO `peliculas` (`id`, `nombre`, `tipo`, `fecha_estreno`, `cant_publico`, `foto`, `actor_principal`) VALUES
(13, 'peliculafoto', 'amor', '10-01-1990', 1000, '/fotosPelicula/peliculafoto.png', 'actormil'),
(14, 'peliculafoto2', 'amor', '10-01-1990', 1000, '/fotosPelicula/peliculafoto2.png', 'actormil'),
(15, 'peliculasinfoto', 'amor', '10-01-1990', 1000, '/fotoDefault/defecto.png', 'actormiluno'),
(16, 'peliculasinfoto2', 'amor', '10-01-1990', 1000, '/fotosPelicula/peliculasinfoto2.png', 'actormiluno'),
(17, 'peliculasinfoto3', 'amor', '10-01-1990', 1000, './fotoDefault/defecto.png', 'actormiluno'),
(18, 'peliprobar', 'otros', '2019-01-01', 10000, './fotoDefault/defecto.png', 'actuno'),
(19, 'peliprobar2', 'otros', '2019-01-01', 233, './fotoDefault/defecto.png', 'actuno');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `estrellas`
--
ALTER TABLE `estrellas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actores`
--
ALTER TABLE `actores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `estrellas`
--
ALTER TABLE `estrellas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
