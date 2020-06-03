USE simple_mst;

-- 住所マスタ (住所.jp)
DROP TABLE IF EXISTS `m_address`;
CREATE TABLE `m_address` (
  `id`             INT(9) NOT NULL DEFAULT 0     COMMENT '住所コード',
  `ken_id`         INT(2)          DEFAULT NULL  COMMENT '都道府県コード',
  `city_id`        INT(5)          DEFAULT NULL  COMMENT '市区町村コード',
  `town_id`        INT(9)          DEFAULT NULL  COMMENT '町域コード',
  `zip`            VARCHAR(8)      DEFAULT NULL  COMMENT '郵便番号',
  `office_flg`     TINYINT(1)      DEFAULT NULL  COMMENT '事業所フラグ',
  `delete_flg`     TINYINT(1)      DEFAULT NULL  COMMENT '廃止フラグ',
  `ken_name`       VARCHAR(8)      DEFAULT NULL  COMMENT '都道府県',
  `ken_furi`       VARCHAR(8)      DEFAULT NULL  COMMENT '都道府県カナ',
  `city_name`      VARCHAR(24)     DEFAULT NULL  COMMENT '市区町村',
  `city_furi`      VARCHAR(24)     DEFAULT NULL  COMMENT '市区町村カナ',
  `town_name`      VARCHAR(32)     DEFAULT NULL  COMMENT '町域',
  `town_furi`      VARCHAR(32)     DEFAULT NULL  COMMENT '町域カナ',
  `town_memo`      VARCHAR(16)     DEFAULT NULL  COMMENT '町域補足',
  `kyoto_street`   VARCHAR(32)     DEFAULT NULL  COMMENT '京都通り名',
  `block_name`     VARCHAR(64)     DEFAULT NULL  COMMENT '字丁目',
  `block_furi`     VARCHAR(64)     DEFAULT NULL  COMMENT '字丁目カナ',
  `memo`           VARCHAR(255)    DEFAULT NULL  COMMENT '補足',
  `office_name`    VARCHAR(255)    DEFAULT NULL  COMMENT '事業所名',
  `office_furi`    VARCHAR(255)    DEFAULT NULL  COMMENT '事業所名カナ',
  `office_address` VARCHAR(255)    DEFAULT NULL  COMMENT '事業所住所',
  `new_id`         INT(11)         DEFAULT NULL  COMMENT '新住所コード',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8  COMMENT='住所マスタ';
