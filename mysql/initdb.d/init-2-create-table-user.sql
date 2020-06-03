USE simple_mst;

-- ユーザーテーブル
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id`         INT(10)      UNSIGNED NOT NULL AUTO_INCREMENT  COMMENT 'ID',
  `username`   CHAR(10)     DEFAULT NULL  COMMENT 'ユーザー',
  `name`       VARCHAR(50)  DEFAULT NULL  COMMENT 'ユーザー名称',
  `password`   VARCHAR(255) DEFAULT NULL  COMMENT 'パスワード',
  `scopelevel` INT(1)       DEFAULT 1     COMMENT '権限レベル: 1:一般, 5:更新者, 9:管理者',
  PRIMARY KEY (`id`),
  UNIQUE KEY (`username`)
) DEFAULT CHARSET=utf8  COMMENT='ユーザーテーブル';

-- 初期データ
INSERT INTO `t_user`( `id`, `username`, `name`, `password`, `scopelevel` )
VALUES ( 1, 'admin', '管理者 太郎', '5a1a004226da28343fe29dba9163d8109851e396dc6645cc9f111b63b3ea4bfe', 9 )
