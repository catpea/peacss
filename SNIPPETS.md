catkin -s 20 -l 5 colors.txt > src/scss/_colors.scss

//
// // Lighten backgrounds and borders of buttons
// @each $color, $value in $theme-colors {
//   .btn-#{$color} {
//     @include button-variant(lighten($value, 10%), lighten($value, 30%));
//   }
// }
//
//
// // Lighten outline colors,
// @each $color, $value in $theme-colors {
//   .btn-outline-#{$color} {
//     @include button-outline-variant(lighten($value, 20%));
//   }
// }




@function lighten-map($request, $percent) {
  $response: ();
  @each $name, $color in $request {
    $response: map-merge( $response, ( #{$name}: lighten($color, $percent ) ) );
  }
  @return $response;
}


@function darken-map($request, $percent) {
  $response: ();
  @each $name, $color in $request {
    $response: map-merge( $response, ( #{$name}: darken($color, $percent ) ) );
  }
  @return $response;
}

// $light-colors: ();
// @each $name, $color in $theme-colors {
//   $light-colors: map-merge( $light-colors, ( #{$name}: lighten($color, 20%) ) );
// }
//
// $dark-colors: ();
// @each $name, $color in $theme-colors {
//   $dark-colors: map-merge( $dark-colors, ( #{$name}: darken($color, 5%) ) );
// }

//
//
//
//
//
// $bg-gradient: ();
// @each $name, $color in $theme-colors {
//   $bg-gradient: map-merge( $bg-gradient, ( #{$name}: linear-gradient(120deg, adjust-hue($color, -20deg), adjust-hue($color, 20deg) ) ) );
// }


$utilities: (

"background-color": (
  property: background-color,
  class: bg,
  values: map-merge(
    $theme-backgrounds,
    (
      "body": $body-bg,
      "white": $white,
      "transparent": transparent
    )
  )
),

// "background-color": (
//   property: background-color,
//   class: bg,
//   values: map-merge(
//     darken-map($theme-colors, 10%),
//     (
//       "body": $body-bg,
//       "white": $white,
//       "transparent": transparent
//     )
//   )
// ),


// "color": (
//   property: color,
//   class: text,
//   values: map-merge(
//     lighten-map($theme-colors, 30%),
//     (
//       "white": $white,
//       "body": $body-color,
//       "muted": $text-muted,
//       "black-50": rgba($black, .5),
//       "white-50": rgba($white, .5),
//       "reset": inherit,
//     )
//   )
// ),


  // "bg-gradient": (
  //   property: background,
  //   class: bg-gradient,
  //   values: $bg-gradient
  // ),
  //
  // "bg-gradient": (
  //   property: background,
  //   class: bg-gradient,
  //   values: $bg-gradient
  // ),

  // "inset-shadow": (
  //   property: box-shadow,
  //   class: shadow-inset,
  //   values: (
  //     null: inset $box-shadow,
  //     sm: inset $box-shadow-sm,
  //     lg: inset $box-shadow-lg,
  //     none: none,
  //   )
  // ),
  // //
  // "background-color-light": (
  //   property: background-color,
  //   class: bg-light,
  //   values: map-merge( $light-colors, ( "body": $body-bg, "white": $white, "transparent": transparent ))
  // ),
  //
  // "background-color": (
  //   property: background-color,
  //   class: bg,
  //   values: map-merge( $dark-colors, ( "body": $body-bg, "white": $white, "transparent": transparent ))
  // ),
  //
  // "color-light": (
  //   property: color,
  //   class: text-light,
  //   values: map-merge( $light-colors, ( "white": $white, "body": $body-color, "muted": $text-muted, "black-50": rgba($black, .5), "white-50": rgba($white, .5), "reset": inherit, ) )
  // ),
  // "color-dark": (
  //   property: color,
  //   class: text-dark,
  //   values: map-merge( $dark-colors, ( "white": $white, "body": $body-color, "muted": $text-muted, "black-50": rgba($black, .5), "white-50": rgba($white, .5), "reset": inherit, ) )
  // ),

);
