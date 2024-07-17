(function() {var type_impls = {
"read_fonts":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TupleVariationData%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/tables/variations.rs.html#505\">source</a><a href=\"#impl-Clone-for-TupleVariationData%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"read_fonts/tables/variations/struct.TupleVariationData.html\" title=\"struct read_fonts::tables::variations::TupleVariationData\">TupleVariationData</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/read_fonts/tables/variations.rs.html#505\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"read_fonts/tables/variations/struct.TupleVariationData.html\" title=\"struct read_fonts::tables::variations::TupleVariationData\">TupleVariationData</a>&lt;'a, T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.79.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.79.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","read_fonts::tables::cvar::CvtVariationData","read_fonts::tables::gvar::GlyphVariationData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TupleVariationData%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/read_fonts/tables/variations.rs.html#518-552\">source</a><a href=\"#impl-TupleVariationData%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"struct\" href=\"read_fonts/tables/variations/struct.TupleVariationData.html\" title=\"struct read_fonts::tables::variations::TupleVariationData\">TupleVariationData</a>&lt;'a, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"read_fonts/tables/variations/trait.TupleDelta.html\" title=\"trait read_fonts::tables::variations::TupleDelta\">TupleDelta</a> + 'a,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.tuples\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/tables/variations.rs.html#522-534\">source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/tables/variations/struct.TupleVariationData.html#tymethod.tuples\" class=\"fn\">tuples</a>(&amp;self) -&gt; <a class=\"struct\" href=\"read_fonts/tables/variations/struct.TupleVariationIter.html\" title=\"struct read_fonts::tables::variations::TupleVariationIter\">TupleVariationIter</a>&lt;'a, T&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"TupleVariationIter&lt;&#39;a, T&gt;\">ⓘ</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.active_tuples_at\" class=\"method\"><a class=\"src rightside\" href=\"src/read_fonts/tables/variations.rs.html#539-547\">source</a><h4 class=\"code-header\">pub fn <a href=\"read_fonts/tables/variations/struct.TupleVariationData.html#tymethod.active_tuples_at\" class=\"fn\">active_tuples_at</a>(\n    &amp;self,\n    coords: &amp;'a [<a class=\"struct\" href=\"font_types/fixed/struct.F2Dot14.html\" title=\"struct font_types::fixed::F2Dot14\">F2Dot14</a>]\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = (<a class=\"struct\" href=\"read_fonts/tables/variations/struct.TupleVariation.html\" title=\"struct read_fonts::tables::variations::TupleVariation\">TupleVariation</a>&lt;'a, T&gt;, <a class=\"struct\" href=\"font_types/fixed/struct.Fixed.html\" title=\"struct font_types::fixed::Fixed\">Fixed</a>)&gt; + 'a</h4></section></summary><div class=\"docblock\"><p>Returns an iterator over all of the pairs of (variation tuple, scalar)\nfor this glyph that are active for the given set of normalized\ncoordinates.</p>\n</div></details></div></details>",0,"read_fonts::tables::cvar::CvtVariationData","read_fonts::tables::gvar::GlyphVariationData"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()