//
//  ContentView.swift
//  mountainTopCoding(🏔);
//
//  Created by Isaac Tait on 8/16/20.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: mountainTopCoding_____Document

    var body: some View {
        TextEditor(text: $document.text)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(document: .constant(mountainTopCoding_____Document()))
    }
}
