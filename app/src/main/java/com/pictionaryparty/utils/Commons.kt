package com.pictionaryparty.utils

import android.health.connect.datatypes.units.Length
import java.security.MessageDigest
import java.util.Base64
fun generateUserId() : String{
    return generateRandomId(8,('A'..'Z') + ('0'..'9') + ('a'..'z'))
}
fun generateGroupId() : String{
    return generateRandomId(6,('A'..'Z') + ('0'..'9'))
}
private fun generateRandomId(length: Int, allowedChars : List<Char>) : String{
    return (1..length).map { allowedChars.random() }.toString()
}