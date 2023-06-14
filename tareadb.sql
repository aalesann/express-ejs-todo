-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2023 a las 18:29:12
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tareadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id`, `titulo`, `descripcion`, `estado`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Tarea 1', 'Terminar todos los prácticos de TLP1', 0, '2023-06-14 10:42:47', '2023-06-14 14:45:16', NULL),
(3, 'Tarea 11', '                        asdfadsf         \n                        \n                        ', 0, '2023-06-14 10:58:38', '2023-06-14 12:01:39', '2023-06-14 12:01:39'),
(4, 'Tarea 3', 'Desc 3', 0, '2023-06-14 11:10:32', '2023-06-14 14:43:34', NULL),
(5, 'Tarea 4', 'Desc 4', 0, '2023-06-14 11:14:41', '2023-06-14 12:01:03', '2023-06-14 12:01:03'),
(6, 'Tarea 12', 'dfasdfasdf', 0, '2023-06-14 11:15:02', '2023-06-14 12:00:16', '2023-06-14 12:00:16'),
(7, 'adas', 'dfasd', 0, '2023-06-14 11:32:00', '2023-06-14 12:00:12', '2023-06-14 12:00:12'),
(8, 'asdasa', 'sdasdasdasda', 0, '2023-06-14 11:32:09', '2023-06-14 11:59:33', '2023-06-14 11:59:33'),
(9, 'adsf', 'asdfasdf', 0, '2023-06-14 12:04:46', '2023-06-14 14:43:32', NULL),
(10, 'asdfad', 'asdfadf', 0, '2023-06-14 12:04:50', '2023-06-14 14:43:30', NULL),
(11, 'adasd', 'asdfadsf', 0, '2023-06-14 12:06:19', '2023-06-14 14:43:28', NULL),
(12, 'adasd', 'asdfadsf', 0, '2023-06-14 12:06:48', '2023-06-14 14:43:26', NULL),
(13, 'adasd', 'asdfadsf', 0, '2023-06-14 12:08:06', '2023-06-14 14:43:23', NULL),
(14, 'Tarea 1', 'Desc 3', 0, '2023-06-14 15:20:20', '2023-06-14 15:33:37', NULL),
(15, 'Tarea 2', 'Desc 2', 0, '2023-06-14 15:35:29', '2023-06-14 15:35:36', NULL),
(16, 'Tarea 1', 'descripción', 1, '2023-06-14 15:36:20', '2023-06-14 15:59:06', NULL),
(17, 'Tarea 2', 'Desc 2', 1, '2023-06-14 15:36:34', '2023-06-14 15:36:34', NULL),
(18, 'Tarea 3', 'Desc 4', 1, '2023-06-14 16:07:19', '2023-06-14 16:08:03', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
