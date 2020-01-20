import React from 'react'
import Tag from './Tag'
import { withKnobs, color } from '@storybook/addon-knobs'

export default { title: 'Tag', decorators: [withKnobs] }

export const TagNormal = ({ text = 'Normal' }) => <Tag text={text}></Tag>

export const TagFire = ({ text = 'Fire' }) => <Tag text={text}></Tag>

export const TagWater = ({ text = 'Water' }) => <Tag text={text}></Tag>

export const TagElectric = ({ text = 'Electric' }) => <Tag text={text}></Tag>

export const TagGrass = ({ text = 'Grass' }) => <Tag text={text}></Tag>

export const TagFlying = ({ text = 'Flying' }) => <Tag text={text}></Tag>

export const TagBug = ({ text = 'Bug' }) => <Tag text={text}></Tag>

export const TagPoison = ({ text = 'Poison' }) => <Tag text={text}></Tag>

export const TagRock = ({ text = 'Rock' }) => <Tag text={text}></Tag>

export const TagGround = ({ text = 'Ground' }) => <Tag text={text}>{text}</Tag>

export const TagFighting = ({ text = 'Fighting' }) => <Tag text={text}></Tag>

export const TagIce = ({ text = 'Ice' }) => <Tag text={text}></Tag>

export const TagPsychic = ({ text = 'Psychic' }) => <Tag text={text}></Tag>

export const TagGhost = ({ text = 'Ghost' }) => <Tag text={text}></Tag>

export const TagDragon = ({ text = 'Dragon' }) => <Tag text={text}></Tag>

export const TagDark = ({ text = 'Dark' }) => <Tag text={text}></Tag>

export const TagSteel = ({ text = 'Steel' }) => <Tag text={text}></Tag>

export const TagFairy = ({ text = 'Fairy' }) => <Tag text={text}></Tag>
