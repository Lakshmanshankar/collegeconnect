-- CREATE DB for College;

-- Comment the Below line if NOT
DROP DATABASE Dummy;


CREATE DATABASE Dummy; ## Replace this with College

-- use the DATABASE Created BY
USE Dummy;

-- we have Five Tables:
-- +-------------------+
-- | Tables_in_College |
-- +-------------------+
-- | StudentAttendance |
-- | StudentDetails    |
-- | StudentInfo       |
-- | StudentLibrary    |
-- | StudentMarks      |
-- +-------------------+


-- StudentDetails Structure ( Main table Which is Stored This information is Stored in the localstorage and used by all the tables)
-- +---------+--------------+------+-----+---------+-------+
-- | Field   | Type         | Null | Key | Default | Extra |
-- +---------+--------------+------+-----+---------+-------+
-- | id      | varchar(50)  | YES  |     | NULL    |       |
-- | name    | varchar(100) | YES  |     | NULL    |       |
-- | email   | varchar(100) | YES  |     | NULL    |       |
-- | picture | varchar(200) | YES  |     | NULL    |       |
-- | role    | varchar(50)  | YES  |     | NULL    |       |
-- | sub     | varchar(100) | YES  |     | NULL    |       |
-- | regno   | int          | YES  |     | 0       |       |
-- +---------+--------------+------+-----+---------+-------+
--

CREATE TABLE StudentDetails (
  id varchar(50),name varchar(100),email varchar(100),picture varchar(200),role varchar(50),sub varchar(100),regno varchar(100) Default 0
);


-- StudentMarks Structure (This table is just used for the Class) email is main key
-- +----------+--------------+------+-----+---------+-------+
-- | Field    | Type         | Null | Key | Default | Extra |
-- +----------+--------------+------+-----+---------+-------+
-- | Graphics | int          | YES  |     | NULL    |       |
-- | IOT      | int          | YES  |     | NULL    |       |
-- | WebTech  | int          | YES  |     | NULL    |       |
-- | STLab    | int          | YES  |     | 0       |       |
-- | Project  | int          | YES  |     | 0       |       |
-- | testname | varchar(10)  | YES  |     | NULL    |       |
-- | email    | varchar(100) | YES  |     | NULL    |       |
-- +----------+--------------+------+-----+---------+-------+
-- 7 rows in set (0.00 sec)
--
CREATE TABLE IF NOT EXISTS StudentMarks (
  Graphics int,IOT int,WebTech int,STLab int,Project int,testname varchar(10),email varchar(100)
);



-- StudentInfo Structure
-- +------------+--------------+------+-----+---------+-------+
-- | Field      | Type         | Null | Key | Default | Extra |
-- +------------+--------------+------+-----+---------+-------+
-- | id         | varchar(100) | NO   | PRI | NULL    |       |
-- | address    | varchar(255) | YES  |     | NULL    |       |
-- | phone      | varchar(10)  | YES  |     | NULL    |       |
-- | class      | varchar(20)  | YES  |     | NULL    |       |
-- | department | varchar(20)  | YES  |     | NULL    |       |
-- | regno      | int          | YES  |     | NULL    |       |
-- +------------+--------------+------+-----+---------+-------+
-- 6 rows in set (0.00 sec)
--
CREATE TABLE IF NOT EXISTS StudentInfo (
  id varchar(100),address varchar(255),phone varchar(10),class varchar(20),department varchar(20),regno int
);



-- StudentLibrary Structure
-- +----------+--------------+------+-----+---------+-------+
-- | Field    | Type         | Null | Key | Default | Extra |
-- +----------+--------------+------+-----+---------+-------+
-- | id       | varchar(100) | YES  |     | NULL    |       |
-- | bookname | varchar(100) | YES  |     | NULL    |       |
-- | issuedOn | varchar(50)  | YES  |     | NULL    |       |
-- +----------+--------------+------+-----+---------+-------+
--
CREATE TABLE IF NOT EXISTS StudentLibrary(
 id varchar(100),bookname varchar(100),issuedOn varchar(50)
);

-- Comment this as well
DESCRIBE StudentMarks;
DESCRIBE StudentDetails;
DESCRIBE StudentInfo;
DESCRIBE StudentLibrary;

