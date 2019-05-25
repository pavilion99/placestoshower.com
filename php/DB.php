<?php
require_once("MySQL.php");

class DB {
	public static function get() {
		return new mysqli('localhost', 'root', null, 'shower');
	}

	public static function getDBEngine(): DBEngine {
		$sql = self::get();
		return new MySQL($sql);
	}
}