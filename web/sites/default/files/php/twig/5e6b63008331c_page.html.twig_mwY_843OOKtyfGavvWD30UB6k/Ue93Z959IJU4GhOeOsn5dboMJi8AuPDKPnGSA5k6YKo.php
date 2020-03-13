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

/* profiles/contrib/droopler/themes/custom/droopler_theme/templates/layout/page.html.twig */
class __TwigTemplate_9721bc89723d9ed44e4498a98c296dd8afd424a3c6fa66e053541adff78905d0 extends \Twig\Template
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
        $tags = ["block" => 69, "if" => 97];
        $filters = ["t" => 68, "escape" => 99];
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
        // line 66
        echo "<div id=\"page-wrapper\" class=\"page-wrapper\">
  <header id=\"header\" class=\"header\" role=\"banner\"
          aria-label=\"";
        // line 68
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Site header"));
        echo "\">
    ";
        // line 69
        $this->displayBlock('head', $context, $blocks);
        // line 95
        echo "  </header>

  ";
        // line 97
        if ($this->getAttribute(($context["page"] ?? null), "highlighted", [])) {
            // line 98
            echo "    <div class=\"highlighted\">
      <aside class=\"";
            // line 99
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
            echo " section clearfix\" role=\"complementary\">
        ";
            // line 100
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "highlighted", [])), "html", null, true);
            echo "
      </aside>
    </div>
  ";
        }
        // line 104
        echo "  ";
        if ($this->getAttribute(($context["page"] ?? null), "featured_top", [])) {
            // line 105
            echo "    ";
            $this->displayBlock('featured', $context, $blocks);
            // line 113
            echo "  ";
        }
        // line 114
        echo "  ";
        if ($this->getAttribute(($context["page"] ?? null), "admin_tabs", [])) {
            // line 115
            echo "    <div class=\"admin_tabs container\">
      ";
            // line 116
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "admin_tabs", [])), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 119
        echo "  <div id=\"main-wrapper\" class=\"layout-main-wrapper clearfix\">
    ";
        // line 120
        $this->displayBlock('content', $context, $blocks);
        // line 133
        echo "  </div>
  ";
        // line 134
        if ((($this->getAttribute(($context["page"] ?? null), "featured_bottom_first", []) || $this->getAttribute(($context["page"] ?? null), "featured_bottom_second", [])) || $this->getAttribute(($context["page"] ?? null), "featured_bottom_third", []))) {
            // line 135
            echo "    <div class=\"featured-bottom\">
      <aside class=\"";
            // line 136
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
            echo " clearfix\" role=\"complementary\">
        ";
            // line 137
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "featured_bottom_first", [])), "html", null, true);
            echo "
        ";
            // line 138
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "featured_bottom_second", [])), "html", null, true);
            echo "
        ";
            // line 139
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "featured_bottom_third", [])), "html", null, true);
            echo "
      </aside>
    </div>
  ";
        }
        // line 143
        echo "  <footer class=\"site-footer\">
    ";
        // line 144
        $this->displayBlock('footer', $context, $blocks);
        // line 162
        echo "  </footer>

</div>
";
    }

    // line 69
    public function block_head($context, array $blocks = [])
    {
        // line 70
        echo "      <nav";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["navbar_attributes"] ?? null)), "html", null, true);
        echo ">
        <div class=\"container no-padding-sm\">
          <div class=\"navbar-brand\">
            ";
        // line 73
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "header", [])), "html", null, true);
        echo "
          </div>
          ";
        // line 75
        if (($this->getAttribute(($context["page"] ?? null), "primary_menu", []) || $this->getAttribute(($context["page"] ?? null), "lang_menu", []))) {
            // line 76
            echo "            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"
                    data-target=\"#navbarNav\" aria-controls=\"navbarNav\"
                    aria-expanded=\"false\" aria-label=\"Toggle navigation\">
              <span class=\"navbar-toggler-icon\"></span>
            </button>
            <nav class=\"navbar navbar-expand-lg\">
              <div class=\"collapse navbar-collapse\" id=\"navbarNav\">
                ";
            // line 83
            if ($this->getAttribute(($context["page"] ?? null), "primary_menu", [])) {
                // line 84
                echo "                  <div class=\"menu-region\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "primary_menu", [])), "html", null, true);
                echo "</div>
                ";
            }
            // line 86
            echo "                ";
            if ($this->getAttribute(($context["page"] ?? null), "lang_menu", [])) {
                // line 87
                echo "                  <div class=\"lang-region\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "lang_menu", [])), "html", null, true);
                echo "</div>
                ";
            }
            // line 89
            echo "              </div>
            </nav>
          ";
        }
        // line 92
        echo "        </div>
      </nav>
    ";
    }

    // line 105
    public function block_featured($context, array $blocks = [])
    {
        // line 106
        echo "      <div class=\"featured-top\">
        <aside class=\"featured-top__inner section ";
        // line 107
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
        echo " clearfix\"
               role=\"complementary\">
          ";
        // line 109
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "featured_top", [])), "html", null, true);
        echo "
        </aside>
      </div>
    ";
    }

    // line 120
    public function block_content($context, array $blocks = [])
    {
        // line 121
        echo "      <div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["main_attributes"] ?? null)), "html", null, true);
        echo ">
        <div class=\"row clearfix\">
        ";
        // line 123
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "breadcrumb", [])), "html", null, true);
        echo "
          <main";
        // line 124
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["main_content_attributes"] ?? null)), "html", null, true);
        echo ">
            <section class=\"section\">
              <a id=\"main-content\" tabindex=\"-1\"></a>
              ";
        // line 127
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "
            </section>
          </main>
        </div>
      </div>
    ";
    }

    // line 144
    public function block_footer($context, array $blocks = [])
    {
        // line 145
        echo "      <div class=\"";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null)), "html", null, true);
        echo "\">
        ";
        // line 146
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_main", [])), "html", null, true);
        echo "
        ";
        // line 147
        if (((($this->getAttribute(($context["page"] ?? null), "footer_first", []) || $this->getAttribute(($context["page"] ?? null), "footer_second", [])) || $this->getAttribute(($context["page"] ?? null), "footer_third", [])) || $this->getAttribute(($context["page"] ?? null), "footer_fourth", []))) {
            // line 148
            echo "          <div class=\"site-footer__top clearfix\">
            ";
            // line 149
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_first", [])), "html", null, true);
            echo "
            ";
            // line 150
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_second", [])), "html", null, true);
            echo "
            ";
            // line 151
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_third", [])), "html", null, true);
            echo "
            ";
            // line 152
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_fourth", [])), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 155
        echo "        ";
        if ($this->getAttribute(($context["page"] ?? null), "footer_fifth", [])) {
            // line 156
            echo "          <div class=\"site-footer__bottom\">
            ";
            // line 157
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "footer_fifth", [])), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 160
        echo "      </div>
    ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/droopler/themes/custom/droopler_theme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  303 => 160,  297 => 157,  294 => 156,  291 => 155,  285 => 152,  281 => 151,  277 => 150,  273 => 149,  270 => 148,  268 => 147,  264 => 146,  259 => 145,  256 => 144,  246 => 127,  240 => 124,  236 => 123,  230 => 121,  227 => 120,  219 => 109,  214 => 107,  211 => 106,  208 => 105,  202 => 92,  197 => 89,  191 => 87,  188 => 86,  182 => 84,  180 => 83,  171 => 76,  169 => 75,  164 => 73,  157 => 70,  154 => 69,  147 => 162,  145 => 144,  142 => 143,  135 => 139,  131 => 138,  127 => 137,  123 => 136,  120 => 135,  118 => 134,  115 => 133,  113 => 120,  110 => 119,  104 => 116,  101 => 115,  98 => 114,  95 => 113,  92 => 105,  89 => 104,  82 => 100,  78 => 99,  75 => 98,  73 => 97,  69 => 95,  67 => 69,  63 => 68,  59 => 66,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/droopler/themes/custom/droopler_theme/templates/layout/page.html.twig", "/opt/lampp/htdocs/droopler/web/profiles/contrib/droopler/themes/custom/droopler_theme/templates/layout/page.html.twig");
    }
}
