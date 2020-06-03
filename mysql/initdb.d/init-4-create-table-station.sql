USE simple_mst;

-- 事業者マスタ (駅データ.jp)
DROP TABLE IF EXISTS `m_company`;
CREATE TABLE `m_company` (
  `company_cd`      INT(11)       DEFAULT 0 NOT NULL   COMMENT '事業者コード	',
  `rr_cd`           SMALLINT(6)   DEFAULT 0 NOT NULL   COMMENT '鉄道コード',
  `company_name`    VARCHAR(256)  DEFAULT '' NOT NULL  COMMENT '事業者名(一般)',
  `company_name_k`  VARCHAR(256)  DEFAULT NULL         COMMENT '事業者名(一般・カナ)',
  `company_name_h`  VARCHAR(256)  DEFAULT NULL         COMMENT '事業者名(正式名称)',
  `company_name_r`  VARCHAR(256)  DEFAULT NULL         COMMENT '事業者名(略称)',
  `company_url`     VARCHAR(512)  DEFAULT NULL         COMMENT 'Webサイト',
  `company_type`    SMALLINT(6)   DEFAULT 0            COMMENT '事業者区分: 0:その他, 1:JR, 2:大手私鉄, 3:準大手私鉄',
  `e_status`        SMALLINT(6)   DEFAULT 0            COMMENT '状態: 0:運用中, 1:運用前, 2:廃止',
  `e_sort`          INT(11)       DEFAULT 0            COMMENT '並び順',
  PRIMARY KEY (`company_cd`),
  INDEX `m_company_rr_cd` (`rr_cd`),
  INDEX `m_company_company_type` (`company_type`),
  INDEX `m_company_e_sort` (`e_sort`)
) DEFAULT CHARSET=utf8  COMMENT='事業者マスタ';

-- 路線マスタ (駅データ.jp)
DROP TABLE IF EXISTS `m_line`;
CREATE TABLE `m_line` (
  `line_cd`      INT(11)       DEFAULT 0 NOT NULL   COMMENT '路線コード',
  `company_cd`   INT(11)       DEFAULT 0 NOT NULL   COMMENT '事業者コード',
  `line_name`    VARCHAR(256)  DEFAULT '' NOT NULL  COMMENT '路線名称(一般)',
  `line_name_k`  VARCHAR(256)  DEFAULT NULL         COMMENT '路線名称(一般・カナ)',
  `line_name_h`  VARCHAR(256)  DEFAULT NULL         COMMENT '路線名称(正式名称)',
  `line_color_c` VARCHAR(8)    DEFAULT NULL         COMMENT '路線カラー（コード）',
  `line_color_t` VARCHAR(32)   DEFAULT NULL         COMMENT '路線カラー(名称）',
  `line_type`    SMALLINT(6)   DEFAULT 0            COMMENT '路線区分',
  `lon`          double        DEFAULT 0            COMMENT '路線表示時の中央経度',
  `lat`          double        DEFAULT 0            COMMENT '路線表示時の中央緯度',
  `zoom`         SMALLINT(6)   DEFAULT 0            COMMENT '路線表示時のGoogleMap倍率',
  `e_status`     SMALLINT(6)   DEFAULT 0            COMMENT '状態: 0:運用中, 1:運用前, 2:廃止',
  `e_sort`       INT(11)       DEFAULT 0            COMMENT '並び順',
  PRIMARY KEY (`line_cd`),
  INDEX `m_line_company_cd` (`company_cd`),
  INDEX `m_line_e_sort` (`e_sort`)
) DEFAULT CHARSET=utf8  COMMENT='路線マスタ';

-- 駅マスタ (駅データ.jp)
DROP TABLE IF EXISTS `m_station`;
CREATE TABLE `m_station` (
  `station_cd`     INT(11)       DEFAULT 0 NOT NULL   COMMENT '駅コード',
  `station_g_cd`   INT(11)       DEFAULT 0 NOT NULL   COMMENT '駅グループコード',
  `station_name`   VARCHAR(256)  DEFAULT '' NOT NULL  COMMENT '駅名称',
  `station_name_k` VARCHAR(256)  DEFAULT NULL         COMMENT '駅名称(カナ)',
  `station_name_r` VARCHAR(256)  DEFAULT NULL         COMMENT '駅名称(ローマ字)',
  `station_name2`  VARCHAR(256)  DEFAULT NULL         COMMENT '',
  `station_number` VARCHAR(256)  DEFAULT NULL         COMMENT '',
  `station_u`      VARCHAR(256)  DEFAULT NULL         COMMENT '',
  `line_cd`        INT(11)       DEFAULT 0 NOT NULL   COMMENT '路線コード',
  `pref_cd`        SMALLINT(6)   DEFAULT 0            COMMENT '都道府県コード',
  `post`           VARCHAR(32)   DEFAULT NULL         COMMENT '駅郵便番号',
  `address`        VARCHAR(1024) DEFAULT NULL         COMMENT '住所',
  `lon`            DOUBLE        DEFAULT 0            COMMENT '経度',
  `lat`            DOUBLE        DEFAULT 0            COMMENT '緯度',
  `open_ymd`       date          DEFAULT NULL         COMMENT '開業年月日',
  `close_ymd`      date          DEFAULT NULL         COMMENT '廃止年月日',
  `e_status`       SMALLINT(6)   DEFAULT 0            COMMENT '状態: 0:運用中, 1:運用前, 2:廃止',
  `e_sort`         INT(11)       DEFAULT 0            COMMENT '並び順',
  PRIMARY KEY (`station_cd`),
  INDEX `m_station_station_g_cd` (`station_g_cd`),
  INDEX `m_station_line_cd` (`line_cd`),
  INDEX `m_station_pref_cd` (`pref_cd`),
  INDEX `m_station_e_sort` (`e_sort`)
) DEFAULT CHARSET=utf8  COMMENT='駅マスタ';

-- 接続駅マスタ (駅データ.jp)
DROP TABLE IF EXISTS `m_station_join`;
CREATE TABLE `m_station_join` (
  `line_cd`        INT(11)   DEFAULT 0 NOT NULL  COMMENT '路線コード',
  `station_cd1`    INT(11)   DEFAULT 0 NOT NULL  COMMENT '駅コード１',
  `station_cd2`    INT(11)   DEFAULT 0 NOT NULL  COMMENT '駅コード２',
  PRIMARY KEY (`line_cd`, `station_cd1`, `station_cd2`)
) DEFAULT CHARSET=utf8  COMMENT='接続駅マスタ';
