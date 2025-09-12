CREATE TABLE `posts_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author_id` text NOT NULL,
	`content` text NOT NULL,
	`created_at` integer DEFAULT (STRFTIME('%s', 'now') * 1000)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `posts_table_author_id_unique` ON `posts_table` (`author_id`);