DROP DATABASE IF EXISTS simple_mst;
CREATE DATABASE IF NOT EXISTS simple_mst DEFAULT CHARSET utf8;

-- 権限
GRANT ALL PRIVILEGES ON simple_mst.* TO adminuser@localhost IDENTIFIED BY 'mypass';
GRANT ALL PRIVILEGES ON simple_mst.* TO adminuser@'%' IDENTIFIED BY 'mypass';
FLUSH PRIVILEGES;
