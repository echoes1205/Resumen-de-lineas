-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2023 at 08:06 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resumen-lineas`
--

-- --------------------------------------------------------

--
-- Table structure for table `bloque1`
--

CREATE TABLE `bloque1` (
  `id` int(100) NOT NULL,
  `linea` text NOT NULL,
  `ordenes` int(100) NOT NULL,
  `horas` float NOT NULL,
  `defectos` int(100) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bloque1`
--

INSERT INTO `bloque1` (`id`, `linea`, `ordenes`, `horas`, `defectos`, `fecha`) VALUES
(1, '101A', 0, 0, 0, '2023-11-29'),
(2, '101B', 0, 0, 0, '2023-11-29'),
(3, '102A', 0, 0, 0, '2023-11-29'),
(4, '102B', 0, 0, 0, '2023-11-29'),
(5, '102C', 0, 0, 0, '2023-11-29'),
(6, '103A', 0, 0, 0, '2023-11-29'),
(7, '103B', 0, 0, 0, '2023-11-29'),
(8, '103C', 0, 0, 0, '2023-11-29'),
(9, '104A', 0, 0, 0, '2023-11-29'),
(10, '104B', 0, 0, 0, '2023-11-29'),
(11, '104C', 0, 0, 0, '2023-11-29'),
(12, '105A', 0, 0, 0, '2023-11-29'),
(13, '105B', 0, 0, 0, '2023-11-29'),
(14, '106A', 0, 0, 0, '2023-11-29'),
(15, '106B', 0, 0, 0, '2023-11-29'),
(16, '107A', 0, 0, 0, '2023-11-29'),
(17, '107B', 0, 0, 0, '2023-11-29'),
(18, '108A', 0, 0, 0, '2023-11-29'),
(19, '108B', 0, 0, 0, '2023-11-29'),
(20, '109A', 0, 0, 0, '2023-11-29'),
(21, '109B', 0, 0, 0, '2023-11-29'),
(22, '111A', 0, 0, 0, '2023-11-29'),
(23, '111B', 0, 0, 0, '2023-11-29'),
(24, '112A', 0, 0, 0, '2023-11-29'),
(25, '112B', 0, 0, 0, '2023-11-29'),
(26, '113A', 0, 0, 0, '2023-11-29'),
(27, '113B', 0, 0, 0, '2023-11-29'),
(28, '117A', 0, 0, 0, '2023-11-29'),
(29, '117B', 0, 0, 0, '2023-11-29'),
(30, '118A', 0, 0, 0, '2023-11-29'),
(31, '118B', 0, 0, 0, '2023-11-29'),
(32, '119A', 0, 0, 0, '2023-11-29'),
(33, '119B', 0, 0, 0, '2023-11-29'),
(34, '121A', 0, 0, 0, '2023-11-29'),
(35, '121B', 0, 0, 0, '2023-11-29'),
(36, '122A', 0, 0, 0, '2023-11-29'),
(37, '122B', 0, 0, 0, '2023-11-29'),
(38, '123A', 0, 0, 0, '2023-11-29'),
(39, '123B', 0, 0, 0, '2023-11-29');

-- --------------------------------------------------------

--
-- Table structure for table `bloque2`
--

CREATE TABLE `bloque2` (
  `id` int(100) NOT NULL,
  `linea` text NOT NULL,
  `ordenes` int(100) NOT NULL,
  `horas` float NOT NULL,
  `defectos` int(100) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bloque2`
--

INSERT INTO `bloque2` (`id`, `linea`, `ordenes`, `horas`, `defectos`, `fecha`) VALUES
(1, '126A', 0, 0, 0, '2023-11-29'),
(2, '126B', 0, 0, 0, '2023-11-29'),
(3, '127A', 0, 0, 0, '2023-11-29'),
(4, '127B', 0, 0, 0, '2023-11-29'),
(5, '128A', 0, 0, 0, '2023-11-29'),
(6, '128B', 0, 0, 0, '2023-11-29'),
(7, '129A', 0, 0, 0, '2023-11-29'),
(8, '129B', 0, 0, 0, '2023-11-29'),
(9, '130A', 0, 0, 0, '2023-11-29'),
(10, '130B', 0, 0, 0, '2023-11-29'),
(11, '131A', 0, 0, 0, '2023-11-29'),
(12, '131B', 0, 0, 0, '2023-11-29'),
(13, '132A', 0, 0, 0, '2023-11-29'),
(14, '132B', 0, 0, 0, '2023-11-29'),
(15, '133A', 0, 0, 0, '2023-11-29'),
(16, '133B', 0, 0, 0, '2023-11-29'),
(17, '134A', 0, 0, 0, '2023-11-29'),
(18, '134B', 0, 0, 0, '2023-11-29'),
(19, '135A', 0, 0, 0, '2023-11-29'),
(20, '135B', 0, 0, 0, '2023-11-29'),
(21, '136A', 0, 0, 0, '2023-11-29'),
(22, '136B', 0, 0, 0, '2023-11-29'),
(23, '137A', 0, 0, 0, '2023-11-29'),
(24, '137B', 0, 0, 0, '2023-11-29');

-- --------------------------------------------------------

--
-- Table structure for table `flow`
--

CREATE TABLE `flow` (
  `id` int(100) NOT NULL,
  `linea` text NOT NULL,
  `ordenes` int(100) NOT NULL,
  `horas` float NOT NULL,
  `defectos` int(100) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `flow`
--

INSERT INTO `flow` (`id`, `linea`, `ordenes`, `horas`, `defectos`, `fecha`) VALUES
(1, '169', 0, 0, 0, '2023-11-29'),
(2, '170', 0, 0, 0, '2023-11-29'),
(3, '171', 0, 0, 0, '2023-11-29'),
(4, '172', 0, 0, 0, '2023-11-29'),
(5, '173', 0, 0, 0, '2023-11-29'),
(6, '174', 0, 0, 2, '2023-11-29'),
(7, '175', 0, 0, 0, '2023-11-29'),
(8, '176', 0, 0, 0, '2023-11-29'),
(9, '177', 0, 0, 0, '2023-11-29');

-- --------------------------------------------------------

--
-- Table structure for table `kutter`
--

CREATE TABLE `kutter` (
  `id` int(100) NOT NULL,
  `linea` text NOT NULL,
  `ordenes` int(100) NOT NULL,
  `horas` float NOT NULL,
  `defectos` int(100) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kutter`
--

INSERT INTO `kutter` (`id`, `linea`, `ordenes`, `horas`, `defectos`, `fecha`) VALUES
(1, '151', 0, 0, 0, '2023-11-29'),
(2, '152', 0, 0, 0, '2023-11-29'),
(3, '153', 0, 0, 0, '2023-11-29'),
(4, '154', 0, 0, 0, '2023-11-29'),
(5, '155', 0, 0, 0, '2023-11-29'),
(6, '156', 0, 0, 0, '2023-11-29');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(100) NOT NULL,
  `user` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `user`, `username`, `password`) VALUES
(1, 'admin', 'admin', '271123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bloque1`
--
ALTER TABLE `bloque1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bloque2`
--
ALTER TABLE `bloque2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flow`
--
ALTER TABLE `flow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kutter`
--
ALTER TABLE `kutter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bloque1`
--
ALTER TABLE `bloque1`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `bloque2`
--
ALTER TABLE `bloque2`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `flow`
--
ALTER TABLE `flow`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `kutter`
--
ALTER TABLE `kutter`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
