-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2023 at 09:40 PM
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
  `opf` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bloque1`
--

INSERT INTO `bloque1` (`id`, `linea`, `ordenes`, `horas`, `defectos`, `opf`) VALUES
(1, '101A', 0, 0, 0, 'No'),
(2, '101B', 11, 2, 1, 'si'),
(3, '102A', 32, 0, 0, ''),
(4, '102B', 6, 56.5, 2, 'Si'),
(5, '102C', 6, 66.4, 2, 'si'),
(6, '103A', 26, 0, 0, ''),
(7, '103B', 0, 0, 0, ''),
(8, '103C', 0, 0, 0, ''),
(9, '104A', 0, 0, 0, ''),
(10, '104B', 69, 0, 0, ''),
(11, '104C', 0, 0, 0, ''),
(12, '105A', 0, 0, 0, ''),
(13, '105B', 6, 69, 6, 'Si'),
(14, '106A', 0, 0, 0, ''),
(15, '106B', 0, 0, 0, ''),
(16, '107A', 0, 0, 0, ''),
(17, '107B', 0, 0, 0, ''),
(18, '108A', 0, 0, 0, ''),
(19, '108B', 0, 0, 0, ''),
(20, '109A', 0, 0, 0, ''),
(21, '109B', 0, 0, 0, ''),
(22, '111A', 0, 0, 0, ''),
(23, '111B', 0, 0, 0, ''),
(24, '112A', 0, 0, 0, ''),
(25, '112B', 0, 0, 0, ''),
(26, '113A', 0, 0, 0, ''),
(27, '113B', 0, 0, 0, ''),
(28, '117A', 0, 0, 0, ''),
(29, '117B', 0, 0, 0, ''),
(30, '118A', 0, 0, 0, ''),
(31, '118B', 0, 0, 0, ''),
(32, '119A', 0, 0, 0, ''),
(33, '119B', 0, 0, 0, ''),
(34, '121A', 0, 0, 0, ''),
(35, '121B', 0, 0, 0, ''),
(36, '122A', 0, 0, 0, ''),
(37, '122B', 0, 0, 0, ''),
(38, '123A', 0, 0, 0, ''),
(39, '123B', 0, 0, 0, '');

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
  `opf` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bloque2`
--

INSERT INTO `bloque2` (`id`, `linea`, `ordenes`, `horas`, `defectos`, `opf`) VALUES
(1, '126A', 0, 0, 0, ''),
(2, '126B', 0, 0, 0, ''),
(3, '127A', 0, 0, 0, ''),
(4, '127B', 0, 0, 0, ''),
(5, '128A', 0, 0, 0, ''),
(6, '128B', 0, 0, 0, ''),
(7, '129A', 0, 0, 0, ''),
(8, '129B', 0, 0, 0, ''),
(9, '130A', 0, 0, 0, ''),
(10, '130B', 0, 0, 0, ''),
(11, '131A', 0, 0, 0, ''),
(12, '131B', 0, 0, 0, ''),
(13, '132A', 0, 0, 0, ''),
(14, '132B', 0, 0, 0, ''),
(15, '133A', 0, 0, 0, ''),
(16, '133B', 0, 0, 0, ''),
(17, '134A', 0, 0, 0, ''),
(18, '134B', 0, 0, 0, ''),
(19, '135A', 0, 0, 0, ''),
(20, '135B', 0, 0, 0, ''),
(21, '136A', 0, 0, 0, ''),
(22, '136B', 0, 0, 0, ''),
(23, '137A', 0, 0, 0, ''),
(24, '137B', 0, 0, 0, '');

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
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
