<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* profiles/contrib/droopler/modules/custom/d_blog/templates/page--blog.html.twig */
class __TwigTemplate_b2f09d729198164f48f26353b2870336fcaebbdf8ce8c696564f1d29932d8bee extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'head' => [$this, 'block_head'],
            'featured' => [$this, 'block_featured'],
            'content' => [$this, 'block_content'],
            'footer' => [$this, 'block_footer'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["block" => 68, "if" => 96];
        $filters = ["t" => 67, "escape" => 98];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['block', 'if'],
                ['t', 'escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 65
        echo "<div id=\"page-wrapper\" class=\"page-wrapper\">
  <header id=\"header\" class=\"header\" role=\"banner\"
          aria-label=\"";
        // line 67
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Site header"));
        echo "\">
    ";
        // line 68
        $this->displayBlock('head', $context, $blocks);
        // line 94
        echo "  </header>

  ";
        // line 96
        if ($this->getAttribute(($context["page"] ?? null), "highlighted", [])) {
            // line 97
            echo "    <div class=\"highlighted\">
      <aside class=\"";
            // line 98
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
            echo " section clearfix\" role=\"complementary\">
        ";
            // line 99
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "highlighted", [])), "html", null, true);
            echo "
      </aside>
    </div>
  ";
        }
        // line 103
        echo "  ";
        if ($this->getAttribute(($context["page"] ?? null), "featured_top", [])) {
            // line 104
            echo "    ";
            $this->displayBlock('featured', $context, $blocks);
            // line 112
            echo "  ";
        }
        // line 113
        echo "  <div id=\"main-wrapper\" class=\"layout-main-wrapper clearfix\">
    ";
        // line 114
        $this->displayBlock('content', $context, $blocks);
        // line 128
        echo "  </div>
  ";
        // line 129
        if ((($this->getAttribute(($context["page"] ?? null), "featured_bottom_first", []) || $this->getAttribute(($context["page"] ?? null), "featured_bottom_second", [])) || $this->getAttribute(($context["page"] ?? null), "featured_bottom_third", []))) {
            // line 130
            echo "    <div class=\"featured-bottom\">
      <aside class=\"";
            // line 131
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
            echo " clearfix\" role=\"complementary\">
        ";
            // line 132
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "featured_bottom_first", [])), "html", null, true);
            echo "
        ";
            // line 133
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "featured_bottom_second", [])), "html", null, true);
            echo "
        ";
            // line 134
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "featured_bottom_third", [])), "html", null, true);
            echo "
      </aside>
    </div>
  ";
        }
        // line 138
        echo "  <footer class=\"site-footer\">
    ";
        // line 139
        $this->displayBlock('footer', $context, $blocks);
        // line 157
        echo "  </footer>

</div>
";
    }

    // line 68
    public function block_head($context, array $blocks = [])
    {
        // line 69
        echo "      <nav";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["navbar_attributes"] ?? null)), "html", null, true);
        echo ">
        <div class=\"container no-padding-sm\">
          <div class=\"navbar-brand\">
            ";
        // line 72
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header", [])), "html", null, true);
        echo "
          </div>
          ";
        // line 74
        if (($this->getAttribute(($context["page"] ?? null), "primary_menu", []) || $this->getAttribute(($context["page"] ?? null), "lang_menu", []))) {
            // line 75
            echo "            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"
                    data-target=\"#navbarNav\" aria-controls=\"navbarNav\"
                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">
              <span class=\"navbar-toggler-icon\"></span>
            </button>
            <nav class=\"navbar navbar-expand-lg\">
              <div class=\"collapse navbar-collapse\" id=\"navbarNav\">
                ";
            // line 82
            if ($this->getAttribute(($context["page"] ?? null), "primary_menu", [])) {
                // line 83
                echo "                  <div class=\"menu-region\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "primary_menu", [])), "html", null, true);
                echo "</div>
                ";
            }
            // line 85
            echo "                ";
            if ($this->getAttribute(($context["page"] ?? null), "lang_menu", [])) {
                // line 86
                echo "                  <div class=\"lang-region\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "lang_menu", [])), "html", null, true);
                echo "</div>
                ";
            }
            // line 88
            echo "              </div>
            </nav>
          ";
        }
        // line 91
        echo "        </div>
      </nav>
    ";
    }

    // line 104
    public function block_featured($context, array $blocks = [])
    {
        // line 105
        echo "      <div class=\"featured-top\">
        <aside class=\"featured-top__inner section ";
        // line 106
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
        echo " clearfix\"
               role=\"complementary\">
          ";
        // line 108
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "featured_top", [])), "html", null, true);
        echo "
        </aside>
      </div>
    ";
    }

    // line 114
    public function block_content($context, array $blocks = [])
    {
        // line 115
        echo "      <div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["main_attributes"] ?? null), "addClass", [0 => "container-fluid"], "method"), "removeClass", [0 => "container", 1 => "py-4"], "method")), "html", null, true);
        echo ">
        <div class=\"row clearfix\">
          ";
        // line 117
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "breadcrumb", [])), "html", null, true);
        echo "
          <main class=\"main-content\">
            <h1 class=\"blog-listing-main-header\">";
        // line 119
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "#title", [], "array")), "html", null, true);
        echo " </h1>
            <section class=\"section\">
              <a id=\"main-content\" tabindex=\"-1\"></a>
              ";
        // line 122
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "
            </section>
          </main>
        </div>
      </div>
    ";
    }

    // line 139
    public function block_footer($context, array $blocks = [])
    {
        // line 140
        echo "      <div class=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
        echo "\">
        ";
        // line 141
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_main", [])), "html", null, true);
        echo "
        ";
        // line 142
        if (((($this->getAttribute(($context["page"] ?? null), "footer_first", []) || $this->getAttribute(($context["page"] ?? null), "footer_second", [])) || $this->getAttribute(($context["page"] ?? null), "footer_third", [])) || $this->getAttribute(($context["page"] ?? null), "footer_fourth", []))) {
            // line 143
            echo "          <div class=\"site-footer__top clearfix\">
            ";
            // line 144
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_first", [])), "html", null, true);
            echo "
            ";
            // line 145
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_second", [])), "html", null, true);
            echo "
            ";
            // line 146
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_third", [])), "html", null, true);
            echo "
            ";
            // line 147
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_fourth", [])), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 150
        echo "        ";
        if ($this->getAttribute(($context["page"] ?? null), "footer_fifth", [])) {
            // line 151
            echo "          <div class=\"site-footer__bottom\">
            ";
            // line 152
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_fifth", [])), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 155
        echo "      </div>
    ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/droopler/modules/custom/d_blog/templates/page--blog.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  292 => 155,  286 => 152,  283 => 151,  280 => 150,  274 => 147,  270 => 146,  266 => 145,  262 => 144,  259 => 143,  257 => 142,  253 => 141,  248 => 140,  245 => 139,  235 => 122,  229 => 119,  224 => 117,  218 => 115,  215 => 114,  207 => 108,  202 => 106,  199 => 105,  196 => 104,  190 => 91,  185 => 88,  179 => 86,  176 => 85,  170 => 83,  168 => 82,  159 => 75,  157 => 74,  152 => 72,  145 => 69,  142 => 68,  135 => 157,  133 => 139,  130 => 138,  123 => 134,  119 => 133,  115 => 132,  111 => 131,  108 => 130,  106 => 129,  103 => 128,  101 => 114,  98 => 113,  95 => 112,  92 => 104,  89 => 103,  82 => 99,  78 => 98,  75 => 97,  73 => 96,  69 => 94,  67 => 68,  63 => 67,  59 => 65,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/droopler/modules/custom/d_blog/templates/page--blog.html.twig", "/opt/lampp/htdocs/droopler/web/profiles/contrib/droopler/modules/custom/d_blog/templates/page--blog.html.twig");
    }
}
