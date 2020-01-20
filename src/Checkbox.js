import styled from 'styled-components/macro'

const Checkbox = styled.input``
$control-label-text-size: 16px; 

$input-control: transparent;
$input-control-active: $color-primary;
$input-control-border: lighten($base-gray, 20%);
$input-control-disabled: lighten($input-control-border, 14%);
$input-control-disabled-checked: lighten($input-control-active, 30%);

input[type='radio'],
input[type='checkbox'] {
  position: absolute;
  display: none;
}

input[type='radio'][disabled],
input[type='checkbox'][disabled] {
  cursor: not-allowed;
}

input[type='radio'] + label,
input[type='checkbox'] + label {
  position: relative;
  display: block;
  padding-left: 1.875 * $control-label-text-size;
  cursor: pointer;
  vertical-align: middle;
  font-size: $control-label-text-size;
  line-height: 1.3em;
  margin-bottom: .5 * $control-label-text-size;

  &:hover {
    &:before {
      border: 1px solid $input-control-active;
    }
  }
  
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 1.25 * $control-label-text-size;
    height: 1.25 * $control-label-text-size;
    content: '';
    transition: border .2s ease;
    border: 1px solid $input-control-border;
    background: $input-control;
  }
  
  &:after {
    position: absolute;
    content: '';
    transition: all .2s ease;
  }
}

input[type='radio'][disabled] + label,
input[type='checkbox'][disabled] + label {
  cursor: not-allowed;
  color: $input-control-disabled;
  
  &:hover,
  &:before,
  &:after {
    cursor: not-allowed;
  }
    
  &:before {
    border-color: $input-control-disabled;
  }
}


input[type='radio']:checked + label,
input[type='checkbox']:checked + label {
  
  &:before {
    animation-name: none;
  }
  &:after {
    transform: scale(1);
  }
}

input[type='radio'] + label {
  &:before {
    border-radius: 50%;
  }
  
  &:after {
    top: .375 * $control-label-text-size;
    left: .375 * $control-label-text-size;
    width: .5 * $control-label-text-size;
    height: .5 * $control-label-text-size;
    border-radius: 50%;
    background: $input-control-active;
    transform: scale(0);
  }
}

input[type='radio']:checked + label {
  &:before {
    border: 1px solid $input-control-active;
  }
}
input[type='radio']:checked[disabled] + label {
  &:before {
    border: 1px solid $input-control-disabled-checked;
  }
  
  &:after {
    background: $input-control-disabled-checked;
  }
}

// Checkbox specific sytyling

input[type='checkbox']+ label {
  &:before {
    border-radius: 3px;
  }
  
  &:after {
    top: 0.125 * $control-label-text-size;
    left: 0.4375 * $control-label-text-size;
    width: 0.375 * $control-label-text-size;
    height: 0.75 * $control-label-text-size;
    transform: scale(0) rotate(45deg);
    border-width: 0.125 * $control-label-text-size;
    border-style: solid;
    border-color: #fff;
    border-top: 0;
    border-left: 0;
  }
}
input[type='checkbox']:checked + label {
  &:before {
    border: $input-control-active;
    background: $input-control-active;
  }
  
  &:after {
    transform: scale(1) rotate(45deg);
  }
}

input[type='checkbox']:checked[disabled] + label {
  &:before {
    border: $input-control-disabled-checked;
    background: $input-control-disabled-checked;
  }
}

//ignore me
body {
  padding: 2% 5%;
}
`