searchState.loadedDescShard("quick_xml", 0, "High performance XML reader/writer.\nA module for wrappers that encode / decode data.\nError management module\nManage xml character escapes\nDefines zero-copy XML events used throughout this library.\nModule for handling names according to the W3C Namespaces …\nContains high-level interface for a pull-based XML parser.\nContains high-level interface for an events-based XML …\nDecoder of byte slices into strings.\nWithout <code>encoding</code> feature\nLike <code>decode</code> but using a pre-allocated buffer.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA comment contains forbidden double-hyphen (<code>--</code>) sequence …\nContains the error value\nThe error type used by this crate.\nEscape error\nThe document is not well-formed.\nAn error returned if parsed document is not well-formed, …\nAttribute parsing error\nThe parser started to parse <code>&lt;!</code>, but the input ended before …\nError for when a reserved namespace is set incorrectly.\nXML document cannot be read from or written to underlying …\nThe specified end tag does not match the start tag at that …\nA <code>version</code> attribute was not found in an XML declaration or …\nA document type definition (DTD) does not contain a name …\nThe end tag was not found during reading of a sub-tree of …\nInput decoding error. If <code>encoding</code> feature is disabled, …\nContains the success value\nA specialized <code>Result</code> type where the error is hard-wired to …\nThe document does not corresponds to the XML grammar.\nAn error returned if parsed document does not correspond …\nThe parser started to parse <code>&lt;![CDATA[</code> content, but the …\nThe parser started to parse comment (<code>&lt;!--</code>) content, but …\nThe parser started to parse DTD (<code>&lt;!DOCTYPE</code>) content, but …\nThe parser started to parse processing instruction or XML …\nThe parser started to parse tag content, but the input …\nSpecified namespace prefix is unknown, cannot resolve …\nThe specified end tag was encountered without …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>Error::IllFormed</code> from the given error\nCreates a new <code>Error::Utf8</code> from the given error\nCreates a new <code>Error::EscapeError</code> from the given error\nCreates a new <code>Error::NonDecodable</code> from the given error\nCreates a new <code>Error::Io</code> from the given error\nReturns the argument unchanged.\nCreates a new <code>Error::Syntax</code> from the given error\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNamespace to which prefix tried to be bound\nThe prefix that is tried to be bound\nName of open tag, that is expected to be closed\nName of actually closed tag\nEntity with Null character\nError for XML escape / unescape.\nNot a valid unicode codepoint\nCharacter is not a valid decimal value\nCharacter is not a valid hexadecimal value\nCannot convert decimal to hexa\nCannot convert Hexa to utf8\nUnrecognized escape symbol\nCannot find <code>;</code> after <code>&amp;</code>\nEscapes an <code>&amp;str</code> and replaces all xml special characters (<code>&lt;</code>…\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nXML standard requires that only <code>&lt;</code> and <code>&amp;</code> was escaped in …\nEscapes an <code>&amp;str</code> and replaces xml special characters (<code>&lt;</code>, <code>&gt;</code>, …\nResolves predefined XML entities or all HTML5 entities …\nResolves predefined XML entities. If specified entity is …\nUnescape an <code>&amp;str</code> and replaces all xml escaped characters (…\nUnescape an <code>&amp;str</code> and replaces all xml escaped characters (…\nCDATA content contains unescaped data from the reader. If …\nAn XML declaration (<code>Event::Decl</code>).\nClosing tag data (<code>Event::End</code>): <code>&lt;/name&gt;</code>.\nProcessing instructions (PIs) allow documents to contain …\nOpening tag data (<code>Event::Start</code>), with optional attributes: …\nData from various events (most notably, <code>Event::Text</code>) that …\nUnescaped character data stored in <code>&lt;![CDATA[...]]&gt;</code>.\nComment <code>&lt;!-- ... --&gt;</code>.\nXML declaration <code>&lt;?xml ...?&gt;</code>.\nDocument type definition data (DTD) stored in …\nEmpty element tag (with attributes) <code>&lt;tag attr=&quot;value&quot; /&gt;</code>.\nEnd tag <code>&lt;/tag&gt;</code>.\nEnd of XML document.\nEvent emitted by <code>Reader::read_event_into</code>.\nProcessing instruction <code>&lt;?...?&gt;</code>.\nStart tag (with attributes) <code>&lt;tag attr=&quot;value&quot;&gt;</code>.\nEscaped character data between tags.\nXml Attributes module\nReturns an iterator over the attributes of this tag.\nA view of the processing instructions’ content as a list …\nGets the undecoded raw string with the attributes of this …\nConverts the event into a borrowed event. Most useful when …\nConverts the event into a borrowed event.\nConverts the event into a borrowed event.\nConverts the event into a borrowed event.\nConverts the event into a borrowed event.\nConverts the event into a borrowed event.\nConverts the event into a borrowed event.\nRemove all attributes from the ByteStart\nContent of the processing instruction. Contains everything …\nGets xml encoding, excluding quotes (<code>&#39;</code> or <code>&quot;</code>).\nConverts this CDATA content to an escaped version, that …\nAdd additional attributes to this tag using an iterator.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new <code>BytesStart</code> from the given content (name + …\nCreates a new <code>BytesText</code> from an escaped string.\nCreates a <code>BytesDecl</code> from a <code>BytesStart</code>\nReturns an iterator over the HTML-like attributes of this …\nRemoves trailing XML whitespace bytes from text content.\nRemoves leading XML whitespace bytes from text content.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExtracts the inner <code>Cow</code> from the <code>BytesText</code> event container.\nExtracts the inner <code>Cow</code> from the <code>BytesCData</code> event container.\nExtracts the inner <code>Cow</code> from the <code>BytesPI</code> event container.\nConverts the event into an owned event.\nConverts the event into an owned event.\nEnsures that all data is owned to extend the object’s …\nEnsures that all data is owned to extend the object’s …\nEnsures that all data is owned to extend the object’s …\nConverts the event into an owned event.\nConverts the event to an owned version, untied to the …\nGets the undecoded raw local tag name (excluding …\nGets the undecoded raw local tag name (excluding …\nConverts this CDATA content to an escaped version, that …\nGets the undecoded raw tag name, as present in the input …\nGets the undecoded raw tag name, as present in the input …\nCreates a new <code>BytesStart</code> from the given name.\nCreates a new <code>BytesEnd</code> borrowing a slice.\nCreates a new <code>BytesText</code> from a string. The string is …\nCreates a new <code>BytesCData</code> from a string.\nCreates a new <code>BytesPI</code> from a string.\nConstructs a new <code>XmlDecl</code> from the (mandatory) <em>version</em> …\nConverts this CDATA content to an escaped version, that …\nAdds an attribute to this element.\nEdit the name of the BytesStart in-place\nGets xml standalone, excluding quotes (<code>&#39;</code> or <code>&quot;</code>).\nA target used to identify the application to which the …\nCreates new paired close tag\nConverts the event into an owned event without taking …\nTry to get an attribute\nDecodes then unescapes the content of the event.\nDecodes then unescapes the content of the event with …\nGets xml version, excluding quotes (<code>&#39;</code> or <code>&quot;</code>).\nConsumes <code>self</code> and yield a new <code>BytesStart</code> with additional …\nA struct representing a key/value XML or HTML attribute.\nErrors that can be raised during parsing attributes.\nA struct representing a key/value XML attribute.\nIterator over XML attributes.\nAttribute with value enclosed in double quotes (<code>&quot;</code>). …\nAn attribute with the same name was already encountered. …\nAttribute without value. Attribute key provided. This is …\nAttribute key was not followed by <code>=</code>, position relative to …\nAttribute value was not finished with a matching quote, …\nAttribute value was not found after <code>=</code>, position relative …\nAttribute with value enclosed in single quotes (<code>&#39;</code>). …\nAttribute with value not enclosed in quotes. Attribute key …\nAttribute value is not quoted, position relative to the …\nDecodes then unescapes the value.\nDecodes then unescapes the value with custom entities.\nCreates new attribute from raw bytes. Does not apply any …\nReturns the argument unchanged.\nCreates new attribute from text representation. Key is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new attribute iterator from a buffer, allowing …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the key value\nThe key to uniquely define the attribute.\nMaps an <code>Attr&lt;T&gt;</code> to <code>Attr&lt;U&gt;</code> by applying a function to a …\nCreates a new attribute iterator from a buffer.\nDecodes using UTF-8 then unescapes the value.\nDecodes using UTF-8 then unescapes the value, using custom …\nReturns the attribute value. For <code>Self::Empty</code> variant an …\nThe raw value of the attribute.\nChanges whether attributes should be checked for …\n<code>Prefix</code> resolved to the specified namespace\nXML attribute binds a default namespace. Corresponds to …\nA local (unqualified) name of an element or an attribute, …\nXML attribute binds a specified prefix to a namespace. …\nA namespace name that is declared in a …\nA namespace prefix part of the qualified name of an …\nA namespace prefix declaration, <code>xmlns</code> or <code>xmlns:&lt;name&gt;</code>, as …\nIterator on the current declared prefixes.\nA qualified name of an element or an attribute, including …\nResult of prefix resolution which creates by …\nQualified name does not contain prefix, and resolver does …\nSpecified prefix was not found in scope\nIf that <code>QName</code> represents <code>&quot;xmlns&quot;</code> series of names, returns …\nThe same as <code>(qname.local_name(), qname.prefix())</code>, but does …\nReturns the argument unchanged.\nCreates <code>LocalName</code> from a <code>QName</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts this name to an internal slice representation.\nConverts this name to an internal slice representation.\nExtracts internal slice\nConverts this namespace to an internal slice …\nReturns local part of this qualified name.\nReturns namespace part of this qualified name or <code>None</code> if …\nA struct that holds a parser configuration.\nInside a double-quoted region (<code>&quot;...&quot;</code>).\nA parser that search a <code>&gt;</code> symbol in the slice outside of …\nA low level encoding-agnostic XML event reader that …\nThe initial state (inside element, but outside of …\nUsed to decouple reading of data from data source and …\nA parser that search a <code>?&gt;</code> sequence in the slice.\nA low level encoding-agnostic XML event reader.\nInside a single-quoted region (<code>&#39;...&#39;</code>).\nRange of input in bytes, that corresponds to some piece of …\nGets the current byte position in the input data.\nWhether comments should be validated. If enabled, in case …\nWhether mismatched closing tag names should be detected. …\nReturns reference to the parser configuration\nReturns reference to the parser configuration\nReturns mutable reference to the parser configuration\nReturns mutable reference to the parser configuration\nGet the decoder, used to decode bytes, read by this …\nTurn on or off all checks for well-formedness. Currently …\nThe upper bound of the range (exclusive).\nReturns parse error produced by this parser in case of …\nGets the last error byte position in the input data. If …\nWhether empty elements should be split into an <code>Open</code> and a …\nProcess new data and try to determine end of the parsed …\nReturns number of consumed bytes or <code>None</code> if <code>&gt;</code> was not …\nDetermines the end position of a processing instruction in …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates an XML reader from a file path.\nCreates an XML reader from a file path.\nCreates a <code>NsReader</code> that reads from a reader.\nCreates a <code>Reader</code> that reads from a given reader.\nCreates an XML reader from a string slice.\nCreates an XML reader from a string slice.\nGets a mutable reference to the underlying reader.\nGets a mutable reference to the underlying reader.\nGets a reference to the underlying reader.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes <code>NsReader</code> returning the underlying reader\nConsumes <code>Reader</code> returning the underlying reader\nReturns all the prefixes currently declared except the …\nReads the next event, borrow its content from the input …\nRead an event that borrows from the input rather than a …\nReads the next event into given buffer.\nReads the next <code>Event</code>.\nReads the next event, borrow its content from the input …\nReads the next event into given buffer and resolves its …\nReads content between start and end tags, including any …\nReads content between start and end tags, including any …\nReads until end element is found. This function is …\nReads until end element is found. This function is …\nReads until end element is found using provided buffer as …\nReads until end element is found using provided buffer as …\nResolves a potentially qualified <strong>element name</strong> or <strong>attribute </strong>…\nResolves a potentially qualified <strong>attribute name</strong> into …\nResolves a potentially qualified <strong>element name</strong> into …\nThe lower bound of the range (inclusive).\nWhether trailing whitespace after the markup name are …\nSet both <code>trim_text_start</code> and <code>trim_text_end</code> to the same …\nWhether whitespace after character data should be removed.\nWhether whitespace before character data should be removed.\nA struct to write an element. Contains methods to add …\nXML writer. Writes XML <code>Event</code>s to a <code>std::io::Write</code> …\nProvides a simple, high-level API for writing XML elements.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the underlying writer.\nGet a reference to the underlying writer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes this <code>Writer</code>, returning the underlying writer.\nCreates a <code>Writer</code> from a generic writer.\nPush a new line inside an element between attributes. …\nCreates a <code>Writer</code> with configured indents from a generic …\nAdds an attribute to this element.\nAdd additional attributes to this element using an …\nWrite a Byte-Order-Mark character to the document.\nWrite a CData event <code>&lt;![CDATA[...]]&gt;</code> inside the current …\nWrite an empty (self-closing) tag.\nWrites the given event to the underlying writer.\nManually write a newline and indentation at the proper …\nCreate a new scope for writing XML inside the current …\nWrite a processing instruction <code>&lt;?...?&gt;</code> inside the current …\nWrite some text inside the current element.")