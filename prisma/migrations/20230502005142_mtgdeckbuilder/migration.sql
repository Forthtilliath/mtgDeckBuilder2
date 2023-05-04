-- CreateTable
CREATE TABLE `cards` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(64) NOT NULL,
    `name` VARCHAR(64) NOT NULL,
    `count` INTEGER NOT NULL,

    UNIQUE INDEX `uuid_UNIQUE`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
