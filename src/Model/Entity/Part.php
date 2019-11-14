<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Part Entity.
 *
 * @property int $id
 * @property bool $active
 * @property string $partname
 * @property int $minutes
 * @property string $min_suffix
 * @property bool $assistant
 * @property int $section_id
 * @property \App\Model\Entity\Section $section
 * @property int $sort_order
 * @property \App\Model\Entity\Privilege[] $privileges
 */
class Part extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true,
        'id' => false,
    ];
}